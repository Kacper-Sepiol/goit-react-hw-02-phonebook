import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FormPhoneBook from './components/formPhoneBook/FormPhoneBook';
import ListContacts from 'components/listContacts/ListContacts';
import FilterField from 'components/filterField/FilterField';
import { nanoid } from 'nanoid';

class PhoneBook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  copyContacts = this.state.contacts;

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleChangeFilterField = evt => {
    const { contacts } = this.state;
    const filterValue = evt.currentTarget.value.toLowerCase();

    this.setState({ filter: filterValue });

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );

    this.setState({ contacts: filteredContacts });

    if (evt.currentTarget.value === '') {
      this.setState({ contacts: this.copyContacts });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    const newContact = { id: nanoid(), name, id: nanoid(), number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  render() {
    const { name, number, filter, contacts } = this.state;
    return (
      <div>
        <h1>PhoneBook</h1>
        <FormPhoneBook
          name={name}
          number={number}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></FormPhoneBook>

        <h2>Contacts</h2>
        <FilterField
          filter={filter}
          handleChangeFilterField={this.handleChangeFilterField}
        ></FilterField>
        <ListContacts contacts={contacts}></ListContacts>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<PhoneBook />);
