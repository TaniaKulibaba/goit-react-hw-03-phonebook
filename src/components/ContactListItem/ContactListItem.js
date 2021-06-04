import PropTypes from "prop-types";
import styles from './ContactListItem.module.scss';

const ContactListItem = ({ id, name, number, onRemove }) => {
    return (
        <li key={id} className={styles.item}>{name}: {number}
            <button className={styles.button} type='button' onClick={() => onRemove(id)}>Delete</button>
        </li>
    )
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactListItem;