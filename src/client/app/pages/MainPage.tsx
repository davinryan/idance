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
    document.title = 'MainPage';

    const options = {
      responsive: true
    };

    return (
        <div className="mainPage">
          <div className="header">
            <label className="title">Analytics Reports for www.idance.co.nz</label>
          </div>

          {/*noEntrancesPerSiteSource*/}
          <div>
            <label>How are people getting to my site?</label>
            <CustomChart data={this.state.noEntrancesPerSiteSource} options={options}/>
          </div>

          {/*mostPopularExitPage*/}
          <div>
            <label>What page do people leave my site from?</label>
            <CustomChart data={this.state.mostPopularExitPage} options={options}/>
          </div>

          {/*mostPopularPage*/}
          <div>
            <label>What page do people use the most?</label>
            <CustomChart data={this.state.mostPopularPage} options={options}/>
          </div>

          {/*mostPopularDeviceByCategory*/}
          <div>
            <label>Are my users desktop or mobile users?</label>
            <CustomChart data={this.state.mostPopularDeviceByCategory} options={options}/>
          </div>

          {/*mostPopularDeviceByDeviceType*/}
          <div>
            <label>What device do people use to get to my site?</label>
            <CustomChart data={this.state.mostPopularDeviceByDeviceType} options={options}/>
          </div>

          {/*mostPopularBrowser*/}
          <div>
            <label>What browser do people use to get to my site?</label>
            <CustomChart data={this.state.mostPopularBrowser} options={options}/>
          </div>
        </div>
    );
  }
}

export default MainPage;
