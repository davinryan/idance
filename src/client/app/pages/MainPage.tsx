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
    const data =
        [
          {
            label: "google / organic",
            data: 138
          },
          {
            label: "cerocwellington.com / referral",
            data: 99
          },
          {
            label: "(direct) / (none)",
            data: 67
          },
          {
            label: "google / organic",
            data: 138
          },
          {
            label: "cerocwellington.com / referral",
            data: 99
          },
          {
            label: "(direct) / (none)",
            data: 67
          }];
    const options = {
      responsive: true
    };
    const chartSize = {width: '400px'};

    return (
        <div>
          <p>Graph of stuff</p>
          <CustomChart data={data} options={options} type="doughnut" size={chartSize}/>
        </div>
    );
  }
}

export default MainPage;
