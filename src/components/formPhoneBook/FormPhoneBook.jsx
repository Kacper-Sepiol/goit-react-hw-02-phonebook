import css from './FormPhoneBook.module.css';

const FormPhoneBook = ({ name, handleChange, handleSubmit }) => (
  <form className={css.form} onSubmit={handleSubmit}>
    <label>
      Name
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
      />
    </label>

    <button type="submit" className={css.buttonAdd}>
      Add contact
    </button>
  </form>
);

export default FormPhoneBook;
