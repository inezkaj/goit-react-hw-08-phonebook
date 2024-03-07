import Form from './Form/Form.jsx';
import ContactList from './Contact/ContactList.jsx';
import Filter from './Filter/Filter.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from '../redux/operations.js';

const PhonebookApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Form></Form>
      <h2>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </div>
  );
};
export default PhonebookApp;
