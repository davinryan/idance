import * as React from 'react';
import {
  Route
} from 'react-router-dom';
import MainPage from '../pages/mainPage/MainPage';

/**
 * Default routes for this application.
 */
class Routes extends React.Component<{}, any> {
  public render() {
    return (
        <Route path='/' component={MainPage}/>
    );
  }
}

export default Routes;