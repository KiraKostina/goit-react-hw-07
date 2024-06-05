import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <>
      <ul className={css.contact_list}>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
