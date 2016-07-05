import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ContactListItem = ({contact}) => {
  return (
    <tr>
      <td>{contact.fullname}</td>
      <td>{contact.telephone}</td>
      <td>{contact.email}</td>
      <td>{contact.birthday}</td>
      <td>
        <Link to={'/contacts/'+contact.id+'/edit'} className="btn btn-circle btn-default btn-xs" title="Edit">
          <i className="glyphicon glyphicon-edit"></i>
        </Link>
        <Link to={'/contacts/'+contact.id+'/delete'} className="btn btn-circle btn-danger btn-xs" title="Edit">
          <i className="glyphicon glyphicon-remove"></i>
        </Link>
      </td>
    </tr>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactListItem;
