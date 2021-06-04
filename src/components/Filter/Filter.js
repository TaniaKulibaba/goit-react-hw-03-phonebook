import PropTypes from "prop-types";
import styles from './Filter.module.scss';

const Filter = ({ filter, onChange }) => {
    return (
        <label className={styles.filterLabel}>Find contacts by name
            <input className={styles.input}
                type='text'
                name='filter'
                value={filter}
                onChange={({ target }) => onChange(target.value)}
                placeholder='Enter name for Search'
            />
        </label>
    )
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;