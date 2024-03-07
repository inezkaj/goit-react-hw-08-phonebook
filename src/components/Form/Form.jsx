import { useDispatch } from 'react-redux';
import css from './Form.module.css';
import { addContact } from '../../redux/operations';

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <div className={css.frame}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div>
          <p>Name</p>
          <input
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button type="submit" data-type="" key="" className={css.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default Form;
