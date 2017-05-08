import config from '../config';
import axios from 'axios';
import * as R from 'ramda';

export default class AnalyticsReports {

  public getNoEntrancesPerSiteSource = R.memoize(this._getNoEntrancesPerSiteSource);
  public getMostPopularDeviceByCategory = R.memoize(this._getMostPopularDeviceByCategory);
  public getMostPopularDeviceByDeviceType = R.memoize(this._getMostPopularDeviceByDeviceType);
  public getMostPopularBrowser = R.memoize(this._getMostPopularBrowser);
  public getMostPopularExitPage = R.memoize(this._getMostPopularExitPage);
  public getMostPopularPage = R.memoize(this._getMostPopularPage);

  private async _getNoEntrancesPerSiteSource(): Promise<any> {
    let result = await this.callAnalyticsReportsService('noEntrancesPerSiteSource');
    return this.convertResponseToChartDataFormat(['sourceMedium'], ['entrances', 'values'], result.data);
  }

  private async _getMostPopularDeviceByCategory(): Promise<any> {
    let result = await this.callAnalyticsReportsService('mostPopularDeviceByCategory');
    return this.convertResponseToChartDataFormat(['deviceCategory'], ['pageviews', 'values'], result.data);
  }

  private async _getMostPopularDeviceByDeviceType(): Promise<any> {
    let result = await this.callAnalyticsReportsService('mostPopularDeviceByDeviceType');
    return this.convertResponseToChartDataFormat(['mobileDeviceInfo'], ['pageviews', 'values'], result.data);
  }

  private async _getMostPopularBrowser(): Promise<any> {
    let result = await this.callAnalyticsReportsService('mostPopularBrowser');
    return this.convertResponseToChartDataFormat(['browser'], ['pageviews', 'values'], result.data);
  }

  private async _getMostPopularExitPage(): Promise<any> {
    let result = await this.callAnalyticsReportsService('mostPopularExitPage');
    return this.convertResponseToChartDataFormat(['exitPagePath'], ['pageviews', 'values'], result.data);

  }

  private async _getMostPopularPage(): Promise<any> {
    let result = await this.callAnalyticsReportsService('mostPopularPage');
    return this.convertResponseToChartDataFormat(['pagePath'], ['pageviews', 'values'], result.data);

  }

  private convertResponseToChartDataFormat(labelPath: Array<string>, dataPath: Array<string>, data: Array<any>) {
    const getLabel = R.pipe(R.path(labelPath), R.objOf('label'));
    const getData = R.pipe(R.path(dataPath), R.head, parseInt, R.objOf('data'));
    const processSingleDataResult = R.pipe(<any> R.converge(R.merge, [getLabel, getData]));
    return R.map(processSingleDataResult)(data);
  }

  /**
   * Get report data over the last 60 days
   * @param reportType string indicating the report type. See for /v1/analytics-reports for all report types.
   * @returns {Promise<T>} promise that will resolve the reponse.
   */
  private callAnalyticsReportsService(reportType: string): Promise<any> {
    return axios({
      method: 'get',
      url: config.get('REPORTS_CONTEXT_ROOT'),
      timeout: config.get('SERVICE_TIMEOUT'),
      params: {
        type: reportType,
        startDate: '30daysAgo'
      },
      responseType: 'json'
    }).catch((error) => {
      console.error(error);
    });
  }
}