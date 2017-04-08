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
import {Readable} from "stream";

const analytics = google.analyticsreporting('v4');
const logger = getLogger('AnalyticsReports');

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
    let result = await this.batchGet(request);
    const toConsole = (obj) => {
      console.log('item');
      console.dir(obj);
      return obj;
    };

    const dimension = R.pipe(R.head, R.path(['columnHeader', 'dimensions']), R.head)(result);
    console.log(dimension);
    const metric = R.pipe(R.head, R.path(['columnHeader', 'metricHeader', 'metricHeaderEntries']), R.head, R.path(['name']))(result);
    console.log(metric);

    const getValues = R.lift(R.pipe(R.path(['metrics']), R.head, R.path(['values'])));
    const getDimensions = R.lift(R.path(['dimensions']));
    const getDimMetricPairs = R.pipe(<any> R.converge(R.zip, [getDimensions, getValues]), R.flatten);
    const getRows = R.pipe(R.head, R.path(['data', 'rows']));
    return R.pipe(getRows, getDimMetricPairs)(result);
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
        // logger.info(request.name + ': ' + JSON.stringify(resp.reports[0]));
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