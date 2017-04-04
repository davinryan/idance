// with help from https://www.wedinweb.no/blog/consuming-google-analytics-core-api-v4-with-nodejs
// https://github.com/google/google-api-nodejs-client
// https://console.developers.google.com/apis/api/analyticsreporting.googleapis.com/overview
import {getLogger} from '../../logger';
import * as google from 'googleapis';
import config from '../../config';

const analytics = google.analyticsreporting('v4');
const logger = getLogger('AnalyticsReports');

class AnalyticsReports {

  private SCOPES: string = 'https://www.googleapis.com/auth/analytics.readonly';

  /**
   * Return report on number of hits from different sources.
   * @returns {Promise<T>}
   */
  public getNoEntrancesPerSiteSourceForLast30Days(): object {
    const request: object = {
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
    };

    return this.batchGet(request).then((reports) => {
      return reports[0];
    });
  }

  private batchGet(request): Promise<any> {
    return new Promise((resolve, reject) => {
      const jwtClient = new google.auth.JWT(config.get('GOOGLE_ANALYTICS_CLIENT_EMAIL'), null, config.get('GOOGLE_ANALYTICS_PRIVATE_KEY'), [this.SCOPES], null);
      jwtClient.authorize((authError) => {
        if (authError) {
          logger.error(authError.stack);
          return;
        }
        analytics.reports.batchGet({
          headers: {'Content-Type': 'application/json'},
          resource: request,
          auth: jwtClient
        }, (batchError, resp) => {
          logger.info('getNoEntrancesPerSiteSourceForLast30Days: %s', JSON.stringify(resp.reports[0]));
          if (batchError) {
            logger.error(batchError);
            reject(batchError);
          }
          resolve(resp.reports);
        });
      });
    });
  }
}

export default AnalyticsReports;