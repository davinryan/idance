import * as React from 'react';
import * as Chart from 'chart.js';
import ReactInstance = React.ReactInstance;
import ChartjsConfigBuilder from './ChartjsConigBuilder';

interface ISize {
  width?: string,
  height?: string
}

interface ICustomChart {
  data: any,
  options: any,
  size: ISize
}

class CustomChart extends React.Component<ICustomChart, any> {

  constructor(props: ICustomChart) {
    super(props);
  }

  componentDidMount() {
    let chartCanvas = this.refs.chart as HTMLCanvasElement;
    let myChart = new Chart(chartCanvas, {
      type: "doughnut",
      data: ChartjsConfigBuilder.buildChartDataConfigFromData(this.props.data),
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
        <div style={this.props.size}>
          <canvas ref={'chart'}></canvas>
        </div>
    );
  }
}

export default CustomChart;
