import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ContactListItem from './../components/ContactListItem';
import * as contactActions from '../actions/contactActions';

class ContactList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.loadContacts();
  }

  render () {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Telephone</th>
            <th>Email</th>
            <th>Birthday</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.contacts.map(contact =>
            <ContactListItem key={contact.id} contact={contact} />
          )}
        </tbody>
      </table>
    );
  }

}

ContactList.propTypes = {
  actions: PropTypes.object.isRequired,
  contacts: PropTypes.array,
};

ContactList.contextTypes = {
  router: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {contacts: state.contacts};
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(contactActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
