/**
 * Main class for getting analytics.
 *
 * Helpful documents
 *
 * with help from https://www.wedinweb.no/blog/consuming-google-analytics-core-api-v4-with-nodejs
 * https://github.com/google/google-api-nodejs-client
 * https://console.developers.google.com/apis/api/analyticsreporting.googleapis.com/overview
 */
import {getLogger} from '../../logger';
import * as google from 'googleapis';
import config from '../../config';
import * as R from 'ramda';

const analytics = google.analyticsreporting('v4');
const logger = getLogger('AnalyticsReports');

const wrapInList = (obj) => {
  return [obj];
};

// Dimensions
const getDimensionsTitles = R.pipe(R.head, R.path(['columnHeader', 'dimensions']), R.map(R.replace('ga:', '')), wrapInList);
const getDimensionValues = R.pipe(R.head, R.path(['data', 'rows']), R.map(R.path(['dimensions'])));
const getDimensions = R.pipe(<any> R.converge(R.concat, [getDimensionsTitles, getDimensionValues]), R.splitAt(1), R.apply(R.lift(R.zipObj)));

// Metrics
const getMetricsTitles = R.pipe(R.head, R.path(['columnHeader', 'metricHeader', 'metricHeaderEntries']), R.map(R.pipe(R.path(['name']), R.replace('ga:', ''))), wrapInList);
const getMetricsValues = R.pipe(R.head, R.path(['data', 'rows']), R.map(R.path(['metrics'])));
const getMetrics = R.pipe(<any> R.converge(R.concat, [getMetricsTitles, getMetricsValues]), R.splitAt(1), R.apply(R.lift(R.zipObj)));

// Combined
const getDimensionsWithMetrics = R.pipe(<any> R.converge(R.zip, [getDimensions, getMetrics]), R.map(R.mergeAll));

/**
 * Analytics request.
 */
interface Request {
  name: string;
  payload: object
}

class AnalyticsReports {

  private SCOPES: string = 'https://www.googleapis.com/auth/analytics.readonly';

  private jwtClient = new google.auth.JWT(
      config.get('GOOGLE_ANALYTICS_CLIENT_EMAIL'),
      null,
      config.get('GOOGLE_ANALYTICS_PRIVATE_KEY'), [this.SCOPES], null);

  /**
   * Return report on number of hits from different sources.
   * @returns {Promise<T>}
   */
  public async getNoEntrancesPerSiteSourceForLast30Days(): Promise<any> {
    const request: Request = {
      name: 'getNoEntrancesPerSiteSourceForLast30Days',
      payload: {
        reportRequests: [
          {
            viewId: config.get('GOOGLE_ANALYTICS_VIEW_ID'),
            dateRanges: [
              {
                startDate: '30daysAgo',
                endDate: 'today'
              }
            ],
            metrics: [
              {
                expression: 'ga:entrances'
              }
            ],
            orderBys: [
              {fieldName: 'ga:entrances', sortOrder: 'DESCENDING'}
            ],
            dimensions: [
              {name: 'ga:sourceMedium'}
            ]
          }
        ]
      }
    };
    return await this.batchGetWithFormat(request);
  }

  private async batchGetWithFormat(request: Request): Promise<any> {
    // Call google analytics reporting API
    let result = await this.batchGet(request);

    // Combine
    return getDimensionsWithMetrics(result);
  }

  /**
   *
   * @param request
   * @returns {Promise<T>}
   */
  private async batchGet(request: Request): Promise<any> {
    // Log authorisation error
    await this.jwtClient.authorize((authError) => {
      if (authError) {
        logger.error(authError.stack);
        return;
      }
    });

    // Perform batch get
    return new Promise((resolve, reject) => {
      analytics.reports.batchGet({
        headers: {'Content-Type': 'application/json'},
        resource: request.payload,
        auth: this.jwtClient
      }, (batchError, resp) => {
        logger.info(request.name + ': ' + JSON.stringify(resp.reports[0]));
        if (batchError) {
          logger.error(batchError);
          reject(batchError);
        }
        resolve(resp.reports);
      });
    });
  }
}

export default AnalyticsReports;