import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../redux/selectors';
import { changeFilter } from '../redux/actions';
import s from './Filter.module.css';

export default function Filter() {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const change = e => dispatch(changeFilter(e.target.value));

  return (
    <label className={s.label}>
      Find contact by name
      <input
        className={s.input}
        type="text"
        name="name"
        value={filterValue}
        onChange={change}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </label>
  );
}
