import config from '../config';
import axios from 'axios';
import * as R from 'ramda';

const getLabel = R.pipe(R.path(['sourceMedium']), R.objOf('label'));
const getData = R.pipe(R.path(['entrances', 'values']), R.head, parseInt, R.objOf('data'));
const convertToChartType = R.pipe(<any> R.converge(R.merge, [getLabel, getData]));

export default class AnalyticsReports {

  public noEntrancesPerSiteSource(): Promise<any> {

    return axios({
      method: 'get',
      url: config.get('REPORTS_CONTEXT_ROOT'),
      params: {
        type: 'noEntrancesPerSiteSource'
      },
      responseType: 'json'
    }).then((result) => {
      return R.pipe(R.map(convertToChartType))(result.data);
    }).catch((error) => {
      console.error(error);
    });
  }
}