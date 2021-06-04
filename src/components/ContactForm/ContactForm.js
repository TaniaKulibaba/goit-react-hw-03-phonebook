import { Component } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from "prop-types";
import styles from './ContactForm.module.scss';

const INITIAL_STATE = {
    name: '',
    number: '',    
}

class ContactForm extends Component {
    state = INITIAL_STATE

    handleChangeForm = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        const { name, number } = this.state;
        const { onAdd } = this.props

        const isValidatedForm = this.validateForm()

        if (!isValidatedForm) return
        
        onAdd({ id: uuid(), name, number })
        this.resetForm()
    }

    validateForm = () => {
        const { name, number } = this.state;
        const { onCheckUnique } = this.props
        if (!name || !number) {
            alert('Some field is empty')
            return false
        }

        return onCheckUnique(name)
    }

    resetForm = () => this.setState(INITIAL_STATE)

    render() {
        const { name, number } = this.state
        return (
            <form className={styles.form} onSubmit={this.handleFormSubmit}>
                <label className={styles.label}>Name
                    <input
                        className={styles.input}
                        type='text'
                        name='name'
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        placeholder='Enter name'
                        required
                        value={name}
                        onChange={this.handleChangeForm} />                    
                </label>

                <label className={styles.label}>Number
                    <input
                        className={styles.input}
                        type='tel'
                        name='number'
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        placeholder='Enter phone number'
                        required
                        value={number}
                        onChange={this.handleChangeForm} />
                </label>
                <button className={styles.button} type='submit'>Add contact</button>
            </form>

        )
    }
};

PropTypes.ContactForm = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;