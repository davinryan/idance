import * as React from 'react';
import CustomChart from '../charts/CustomChart';

interface IMainPage {
  location: any;
  router: any;
}

class MainPage extends React.Component<IMainPage, any> {

  constructor(props: IMainPage) {
    super(props);
  }

  render() {
    document.title = 'MainPage';
    const data = {
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
    };
    const options = {
      responsive: true
    };
    const chartSize = {width: '400px'};

    return (
        <div>
          <div>Hello from Davin</div>
          <CustomChart data={data} options={options} type="doughnut" size={chartSize}/>
        </div>
    );
  }
}

export default MainPage;
