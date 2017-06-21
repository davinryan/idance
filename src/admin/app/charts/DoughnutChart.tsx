import * as React from 'react';
import * as Chart from 'chart.js';
import ReactInstance = React.ReactInstance;
import ChartjsConfigBuilder from './ChartjsConigBuilder';

interface ICustomChart {
  data: any,
  options: any,
  clazz?: string
}

class CustomChart extends React.Component<ICustomChart, any> {

  constructor(props: ICustomChart) {
    super(props);
  }

  public componentDidMount() {
    // Set defaults
    const chartCanvas = this.refs.chart as HTMLCanvasElement;
    const myChart = new Chart(chartCanvas, {
      type: 'doughnut',
      data: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#E67E22', '#959595', '#8E44AD', '#2ECC71',
            '#ECf0F1', '#34495E', '#ECF0F1', '#ECF0F1', '#ECF0F1', '#ECF0F1'],
          pointHoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#E67E22', '#959595', '#8E44AD',
            '#2ECC71', '#ECf0F1', '#34495E', '#ECF0F1', '#ECF0F1', '#ECF0F1', '#ECF0F1']
        }]
      },
      options: this.props.options
    });
    this.setState({chart: myChart});
  }

  public componentDidUpdate() {
    const chart = this.state.chart;
    const data = ChartjsConfigBuilder.buildChartDataConfigFromData(this.props.data);

    data.datasets.forEach((dataset, i) => chart.data.datasets[i].data = dataset.data);

    chart.data.labels = data.labels;
    chart.update();
  }

  public render() {
    return (
        <div className={this.props.clazz}>
          <canvas ref={'chart'}></canvas>
        </div>
    );
  }
}

export default CustomChart;
