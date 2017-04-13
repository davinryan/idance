import * as React from 'react'
import * as ReactDOM from 'react-dom';
import Routes from './routes/Routes';
import {
  BrowserRouter as Router,
  browserHistory,
  Route,
  Link
} from 'react-router-dom'

ReactDOM.render(
    <Router history={browserHistory}>
      <Routes />
    </Router>,
    document.getElementById('root')
);
