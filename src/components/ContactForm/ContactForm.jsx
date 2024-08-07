import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().min(3, 'Must be at least 3 characters').max(50, 'Must be 50 characters or less').required('Required'),
  number: Yup.string().min(3, 'Must be at least 3 characters').max(50, 'Must be 50 characters or less').required('Required'),
});

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (contacts.some(contact => contact.name === values.name)) {
      alert(`${values.name} is already in contacts.`);
    } else {
      dispatch(addContact({ ...values, id: Date.now().toString() }));
      resetForm();
    }
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label className={styles.label} htmlFor="name">Name</label>
        <Field name="name" type="text" className={styles.input} />
        <ErrorMessage name="name" component="div" />

        <label className={styles.label} htmlFor="number">Number</label>
        <Field name="number" type="text" className={styles.input} />
        <ErrorMessage name="number" component="div" />

        <button type="submit" className={styles.button}>Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
