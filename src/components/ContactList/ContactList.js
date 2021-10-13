import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import phoneOperations from '../../redux/phonebook/phone-operations';
import { getVisibleContacts } from '../../redux/phonebook/phone-selectors';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(phoneOperations.fetchContacts()), [dispatch]);

  const contacts = useSelector(getVisibleContacts);

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

export default Contacts;
