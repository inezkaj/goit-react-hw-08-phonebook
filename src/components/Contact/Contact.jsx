import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/operations';
import css from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  return (
    <li key={contact.id}>
      <span>{contact.name}</span>:&nbsp;
      <span>{contact.number}</span>
      <button className={css.btnDelete} onClick={handleRemove}>
        delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.object,
};
export default Contact;
