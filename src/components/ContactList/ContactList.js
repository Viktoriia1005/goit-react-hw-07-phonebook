import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../redux/selectors';
import { contactDelete } from '../redux/operation';

import s from './ContactList.module.css';

export default function ContactsList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDelete = id => dispatch(contactDelete(id));

  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.item}>
          {contact.name}: {contact.number}
          <button className={s.button} onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
