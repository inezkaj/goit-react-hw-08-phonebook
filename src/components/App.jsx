import Form from './Form/Form.jsx';
import ContactList from './Contact/ContactList.jsx';
import Filter from './Filter/Filter.jsx';
import { useEffect } from 'react';
import store from '../redux/store.js';
import { useDispatch, Provider } from 'react-redux';
import { getContacts } from '../redux/tasksSlice.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <Provider store={store}>
        <h2>Phonebook</h2>
        <Form></Form>
        <h2>Contacts</h2>
        <Filter></Filter>
        <ContactList></ContactList>
      </Provider>
    </div>
  );
};
export default App;
