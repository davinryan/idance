import * as React from 'react'
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  browserHistory,
  Route,
  Link
} from 'react-router-dom'
import MainPage from './pages/MainPage';

ReactDOM.render(
    <Router history={browserHistory}>
      <div>
        <ul>
          <li><Link to="/analytics-reports/">Root</Link></li>
          <li><Link to="/analytics-reports/mainPage">MainPage</Link></li>
        </ul>

        <Route exact path="/" component={MainPage}/>
        <Route path="/analytics-reports/mainPage" component={MainPage}/>
      </div>
    </Router>,
    document.getElementById('root')
);
