import * as React from 'react';
import * as Chart from 'chart.js';
import ReactInstance = React.ReactInstance;

interface ISize {
  width?: string,
  height?: string
}

interface ICustomChart {
  data: any,
  options: any,
  type: string,
  size: ISize
}

class CustomChart extends React.Component<ICustomChart, any> {

  constructor(props: ICustomChart) {
    super(props);
  }

  componentDidMount () {
    let chartCanvas = this.refs.chart as HTMLCanvasElement;
    let myChart = new Chart(chartCanvas, {
      type: this.props.type,
      data: this.props.data,
      options: this.props.options
    });
    this.setState({chart: myChart});
  }

  componentDidUpdate () {
    let chart = this.state.chart;
    let data = this.props.data;

    data.datasets.forEach((dataset, i) => chart.data.datasets[i].data = dataset.data);

    chart.data.labels = data.labels;
    chart.update();
  }

  render () {
    return (
        <div style={this.props.size}>
          <canvas ref={'chart'}></canvas>
        </div>
    );
  }
}

export default CustomChart;
