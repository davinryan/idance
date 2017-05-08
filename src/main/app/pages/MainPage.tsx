import * as React from 'react';

require('./mainPage.scss');

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

    const options = {
      responsive: true
    };

    return (
        <div className="mainPage">
          <p>Hello from Davin</p>
        </div>
    );
  }
}

export default MainPage;
