import * as R from 'ramda';

interface IInputData {
  label: string,
  data: number
}

interface IChartjsDataConfig {
  labels: Array<string>,
  datasets: Array<IChartjsData>
}

interface IChartjsData {
  data: Array<number>,
  backgroundColor: Array<string>,
  hoverBackgroundColor: Array<string>
}

class ChartjsConigBuilder {

  private static NICE_COLOURS = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#E67E22",
    "#959595",
    "#8E44AD",
    "#2ECC71",
    "#ECf0F1",
    "#34495E",
    "#E74C3C"];

  public static buildChartDataConfigFromData(data: Array<IInputData>): any {
    const wrapInList = (obj) => {
      return [obj];
    };
    const mapIndexed = R.addIndex(R.map);
    const getBaseColours = R.pipe(R.path(['data']), mapIndexed(ChartjsConigBuilder.getColourForIndex));
    const getBackgroundColours = R.pipe(getBaseColours, R.objOf('backgroundColor'));
    const addBackgroundColours = <any> R.converge(R.merge, [R.identity, getBackgroundColours]);
    const getHoverBackgroundColours = R.pipe(getBaseColours, R.objOf('hoverBackgroundColor'));
    const addHoverBackgroundColours = <any> R.converge(R.merge, [R.identity, getHoverBackgroundColours]);
    const getLabels = R.pipe(R.map(R.path(['label'])), R.objOf('labels'));
    const getData = R.pipe(R.map(R.path(['data'])), R.objOf('data'));
    const getDataSets = R.pipe(getData, addBackgroundColours, addHoverBackgroundColours, wrapInList, R.objOf('datasets'));

    return R.pipe(<any> R.converge(R.merge, [getLabels, getDataSets]))(data);
  }

  private static getColourForIndex(value: any, index: number): string {

    if (index < ChartjsConigBuilder.NICE_COLOURS.length - 1) {
      return ChartjsConigBuilder.NICE_COLOURS[index];
    } else {
      return "#ECF0F1";
    }
  }
}

export default ChartjsConigBuilder;