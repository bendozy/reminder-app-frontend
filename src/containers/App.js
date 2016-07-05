import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import ManageHomePage from '../containers/ManageHomePage';
import WelcomePage from './WelcomePage';

class App extends Component {
  constructor (props) {
    super(props);
  }

  renderWelcomePage() {
    return (
      <WelcomePage />
    );
  }

  renderHomePage() {
    return (
      <ManageHomePage />
    );
  }

  render() {
    return this.props.isAuthenticated
      ? this.renderHomePage()
      : this.renderWelcomePage();
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

App.contextTypes = {
  router: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const { isAuthenticated } = state.user;
  return { isAuthenticated };
};

export default connect(mapStateToProps,null)(App);
