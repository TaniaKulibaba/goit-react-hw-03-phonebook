import PropTypes from "prop-types";
import ContactListItem from '../ContactListItem';
import styles from './ContactList.module.scss';

const ContactList = ({ contacts, onRemove }) => {
    if (contacts.length === 0) return null
    return (
        <ul className={styles.list}>
            {contacts.map((contact) => (
                <ContactListItem {...contact} onRemove={onRemove} />
            ))}
        </ul>
    )
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;