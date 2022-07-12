import { useFetchContactsQuery } from '../services/contactsAPI';

import Container from './Container'
import ContactForm from './ContactForm';
import ContactList from './ContactList/';
import Filter from './Filter';
import Loader from './Loader';

import s from './App.module.css'

export default function App() {
  const { data: contacts, isFetching} = useFetchContactsQuery();

  return (
    <Container><h1 className={s.title}>Phonebook</h1>
    <ContactForm contacts={contacts} />

    <h2 className={s.title}>Contacts</h2>
    <Filter />
    {isFetching && <Loader />}
    <ContactList contacts={contacts} /></Container>
  );
}
