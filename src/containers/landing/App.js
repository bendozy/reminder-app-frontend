import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import WelcomePage from '../../components/landing/WelcomePage';
import HomePage from '../../components/landing/HomePage';

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
        <HomePage />
      );
    }

    render() {
      return this.props.isAuthenticated
        ? this.renderHomePage()
        : this.renderWelcomePage();
    }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

App.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const { isAuthenticated } = state.user;
  return { isAuthenticated };
};

export default connect(mapStateToProps)(App);
