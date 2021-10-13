import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
import phoneOperations from '../../redux/phonebook/phone-operations';

import PropTypes from 'prop-types';

const Contacts = () => {
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => dispatch(phoneOperations.fetchContacts()), [dispatch]);
  const contacts = getVisibleContacts(items, filter);

  return (
    <ul className="contact-list">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="contacts-item">
          <span className="contacts-item-name">{name}:</span>
          <span className="contacts-item-name">{number}</span>
          <button
            type="button"
            className="TodoList__btn"
            onClick={() => dispatch(phoneOperations.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const getVisibleContacts = (contacts, filterV) => {
  const normalizedFilter = filterV.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: getVisibleContacts(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(phoneOperations.deleteContact(id)),
//   fetchContacts: () => dispatch(phoneOperations.fetchContacts()),
// });
Contacts.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
export default Contacts;
