import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/landing/App';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={App} />
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
