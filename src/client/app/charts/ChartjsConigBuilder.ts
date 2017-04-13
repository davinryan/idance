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

  public static buildChartDataConfigFromData(data: Array<IInputData>): IChartjsDataConfig {
    return R.compose(R.identity(ChartjsConigBuilder.getDummyConfig))(data);
  }

  private static getDummyConfig(): IChartjsDataConfig {
    return {
      labels: [
        "Red",
        "Blue",
        "Yellow"
      ],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    }
  }

  private static generateRandomColour(): string {
    return "#" + ((1 << 24) * Math.random() | 0).toString(16);
  }
}

export default ChartjsConigBuilder;