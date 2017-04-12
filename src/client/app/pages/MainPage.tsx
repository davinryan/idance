import * as React from 'react';

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

    return (
      <div>
        <header className="header">
        </header>
        <main>
          <div>Hello from Davin</div>
        </main>
      </div>
    );
  }
}

export default MainPage;
