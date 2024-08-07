import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={styles.listItem}>
          {contact.name}: {contact.phone}
          <button onClick={() => dispatch(deleteContact(contact.id))} className={styles.button}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;