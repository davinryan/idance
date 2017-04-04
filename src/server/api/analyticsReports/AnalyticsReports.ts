// with help from https://www.wedinweb.no/blog/consuming-google-analytics-core-api-v4-with-nodejs
// https://github.com/google/google-api-nodejs-client
// https://console.developers.google.com/apis/api/analyticsreporting.googleapis.com/overview
import {getLogger} from '../../logger';
import * as google from 'googleapis';

const KEY = require('./key.json');
const analytics = google.analyticsreporting('v4');
const logger = getLogger('AnalyticsReports');

class AnalyticsReports {

  private SCOPES: string = 'https://www.googleapis.com/auth/analytics.readonly';
  private VIEW_ID: string = '141337572';

  /**
   * Return report on number of hits from different sources.
   * @returns {Promise<T>}
   */
  public getNoEntrancesPerSiteSourceForLast30Days(): Promise<any> {
    return new Promise((resolve, reject) => {
      const request: object = {
        reportRequests: [
          {
            viewId: this.VIEW_ID,
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

      const jwtClient = new google.auth.JWT(KEY.client_email, null, KEY.private_key, [this.SCOPES], null);
      jwtClient.authorize((authError, tokens) => {
        if (authError) {
          logger.error(authError.stack);
          return;
        }
        analytics.reports.batchGet({
          headers: {'Content-Type': 'application/json'},
          resource: request,
          auth: jwtClient
        }, (batchError, resp) => {
          logger.info('getNoEntrancesPerSiteSourceForLast30Days');
          logger.info(JSON.stringify(resp.reports[0]));
          if (batchError) {
            logger.error(batchError);
            reject(batchError);
          }
          resolve(resp.reports[0]);
        });
      });
    });
  }
}

export default AnalyticsReports;