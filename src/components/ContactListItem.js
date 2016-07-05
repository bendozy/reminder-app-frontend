import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import moment from 'moment';

const ContactListItem = ({contact, onDelete}) => {
  const birthday = moment(new Date(contact.birthday)).format('YYYY-MM-DD');
  return (
    <tr>
      <td>{contact.fullname}</td>
      <td>{contact.telephone}</td>
      <td>{contact.email}</td>
      <td>{birthday}</td>
      <td>
        <Link to={'/contacts/'+contact.id+'/edit'} className="btn btn-circle btn-default btn-xs" title="Edit">
          <i className="glyphicon glyphicon-edit"></i>
        </Link>
        <Link to={'#'} onClick={() => onDelete(contact.id)} className="btn btn-circle btn-danger btn-xs" title="Edit">
          <i className="glyphicon glyphicon-remove"></i>
        </Link>
      </td>
    </tr>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
};

export default ContactListItem;
