import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors.js';
import Contact from './Contact.jsx';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getContactsList = () => {
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  return (
    <div>
      <ul>
        {getContactsList().map(contact => {
          return <Contact key={contact.id} contact={contact}></Contact>;
        })}
      </ul>
    </div>
  );
};

export default ContactList;
