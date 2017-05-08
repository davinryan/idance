import * as React from 'react';
import DoughnutChart from '../charts/DoughnutChart';
import Services from '../services';

require('./mainPage.scss');
const analyticsReportsService = Services.getAnalyticsReportsService();

interface IMainPage {
  location: any;
  router: any;
}

class MainPage extends React.Component<IMainPage, any> {

  constructor(props: IMainPage) {
    super(props);
    this.state = {
      noEntrancesPerSiteSource: [],
      mostPopularDeviceByCategory: [],
      mostPopularDeviceByDeviceType: [],
      mostPopularBrowser: [],
      mostPopularExitPage: [],
      mostPopularPage: []
    };
  }

  componentDidMount() {
    analyticsReportsService.getNoEntrancesPerSiteSource().then((result) => {
      this.setState({noEntrancesPerSiteSource: result});
    });
    analyticsReportsService.getMostPopularDeviceByCategory().then((result) => {
      this.setState({mostPopularDeviceByCategory: result});
    });
    analyticsReportsService.getMostPopularDeviceByDeviceType().then((result) => {
      this.setState({mostPopularDeviceByDeviceType: result});
    });
    analyticsReportsService.getMostPopularBrowser().then((result) => {
      this.setState({mostPopularBrowser: result});
    });
    analyticsReportsService.getMostPopularExitPage().then((result) => {
      this.setState({mostPopularExitPage: result});
    });
    analyticsReportsService.getMostPopularPage().then((result) => {
      this.setState({mostPopularPage: result});
    });

    this.setState({height: (window.innerHeight - 100) + 'px'}, () => {
      console.log('height is ', this.state.height);
    });
  }

  render() {
    document.title = 'AdminPage';

    const options = {
      responsive: true
    };

    return (
        <div className="mainPage">
          <button className="btn btn-default">Click me!</button>
          <div className="header">
            <label className="title">Analytics Reports for www.idance.co.nz</label>
          </div>

          <div className="twoChartColumns">
            <div className="chartColumn">
              {/*noEntrancesPerSiteSource*/}
              <div className="donughtChart">
                <label className="chartHeader">How are people getting to my site?</label>
                <DoughnutChart clazz="chart" data={this.state.noEntrancesPerSiteSource} options={options}/>
              </div>

              {/*mostPopularExitPage*/}
              <div className="donughtChart">
                <label className="chartHeader">What page do people leave my site from?</label>
                <DoughnutChart clazz="chart" data={this.state.mostPopularExitPage} options={options}/>
              </div>

              {/*mostPopularPage*/}
              <div className="donughtChart">
                <label className="chartHeader">What page do people use the most?</label>
                <DoughnutChart clazz="chart" data={this.state.mostPopularPage} options={options}/>
              </div>
            </div>

            <div className="chartColumn">
              {/*mostPopularDeviceByCategory*/}
              <div className="donughtChart">
                <label className="chartHeader">Are my users desktop or mobile users?</label>
                <DoughnutChart clazz="chart" data={this.state.mostPopularDeviceByCategory} options={options}/>
              </div>

              {/*mostPopularDeviceByDeviceType*/}
              <div className="donughtChart">
                <label className="chartHeader">What device do people use to get to my site?</label>
                <DoughnutChart clazz="chart" data={this.state.mostPopularDeviceByDeviceType} options={options}/>
              </div>

              {/*mostPopularBrowser*/}
              <div className="donughtChart">
                <label className="chartHeader">What browser do people use to get to my site?</label>
                <DoughnutChart clazz="chart" data={this.state.mostPopularBrowser} options={options}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default MainPage;
