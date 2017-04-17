import * as React from 'react';
import * as Chart from 'chart.js';
import ReactInstance = React.ReactInstance;
import ChartjsConfigBuilder from './ChartjsConigBuilder';

interface ICustomChart {
  data: any,
  options: any
}

class CustomChart extends React.Component<ICustomChart, any> {

  private chartSize: any;

  constructor(props: ICustomChart) {
    super(props);

    this.chartSize = {width: '100%', height: '100%'};
  }

  componentDidMount() {
    // Set defaults
    let chartCanvas = this.refs.chart as HTMLCanvasElement;
    let myChart = new Chart(chartCanvas, {
      type: "doughnut",
      data: {
        "labels": [],
        "datasets": [{
          "data": [],
          "backgroundColor": ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#E67E22", "#959595", "#8E44AD", "#2ECC71", "#ECf0F1", "#34495E", "#ECF0F1", "#ECF0F1", "#ECF0F1", "#ECF0F1"],
          "hoverBackgroundColor": ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#E67E22", "#959595", "#8E44AD", "#2ECC71", "#ECf0F1", "#34495E", "#ECF0F1", "#ECF0F1", "#ECF0F1", "#ECF0F1"]
        }]
      },
      options: this.props.options
    });
    this.setState({chart: myChart});
  }

  componentDidUpdate() {
    let chart = this.state.chart;
    let data = ChartjsConfigBuilder.buildChartDataConfigFromData(this.props.data);

    data.datasets.forEach((dataset, i) => chart.data.datasets[i].data = dataset.data);

    chart.data.labels = data.labels;
    chart.update();
  }

  render() {
    return (
        <div style={this.chartSize}>
          <canvas ref={'chart'}></canvas>
        </div>
    );
  }
}

export default CustomChart;
