import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsReducer';

const Filter = () => {
  const dispatch = useDispatch();

  const addFilter = evt => {
    const query = evt.currentTarget.value;

    dispatch(setFilter(query));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        onChange={addFilter}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </div>
  );
};

export default Filter;
