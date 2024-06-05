import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.container}>
      <div className={css.info_container}>
        <span className={css.contact_line}>
          <FaUser />
          <p>{name}</p>
        </span>
        <span className={css.contact_line}>
          <FaPhoneAlt />
          <p>{number}</p>
        </span>
      </div>
      <button className={css.deleteCntBtn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
