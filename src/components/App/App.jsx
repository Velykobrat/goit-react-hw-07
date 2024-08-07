import React, { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../Contactlist/ContactList';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contactsSlice';
import styles from './App.module.css';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Contact Book</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;