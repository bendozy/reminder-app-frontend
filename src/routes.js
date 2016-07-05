import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import AppContainer from './containers/App';
import ManageContactForm from './containers/ManageContactForm';
import ContactList from './containers/ContactList';
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AppContainer} />
    <Route component={HomePage}>
      <IndexRoute component={ContactList} />
      <Route path="/contacts/add" component={ManageContactForm} />
      <Route path="/contacts/:id/edit" component={ManageContactForm} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
