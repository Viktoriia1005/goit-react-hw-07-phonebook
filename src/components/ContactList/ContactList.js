import { useSelector } from 'react-redux';
import { useDeleteContactMutation } from '../../services/contactsAPI.js';

import s from './ContactList.module.css';

export default function ContactsList({ contacts }) {
  const filterValue = useSelector(state => state.filter);

  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul className={s.list}>
      {contacts &&
        contacts
          .filter(({ name }) => name.toLowerCase().includes(filterValue))
          .map(contact => (
            <li key={contact.id} className={s.item}>
              {contact.name}: {contact.phone}
              <button
                className={s.button}
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
    </ul>
  );
}
