import * as React from 'react';
import CustomChart from '../charts/DoughnutChart';
import Services from '../services';

const analyticsReportsService = Services.getAnalyticsReportsService();

interface IMainPage {
  location: any;
  router: any;
}

class MainPage extends React.Component<IMainPage, any> {

  constructor(props: IMainPage) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount() {
    analyticsReportsService.noEntrancesPerSiteSource().then((result) => {
      this.setState({data: result});
    });
  }

  render() {
    document.title = 'MainPage';

    const options = {
      responsive: true
    };
    const chartSize = {width: '400px'};

    return (
        <div>
          <p>Graph of stuff</p>
          <CustomChart data={this.state.data} options={options} size={chartSize}/>
        </div>
    );
  }
}

export default MainPage;
