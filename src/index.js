import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FormPhoneBook from './components/formPhoneBook/FormPhoneBook';
import ListContacts from 'components/listContacts/ListContacts';
import { nanoid } from 'nanoid';

class PhoneBook extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;

    const newContact = { id: nanoid(), name };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
    }));
  };

  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
        <FormPhoneBook
          name={this.state.name}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></FormPhoneBook>

        <h2>Contacts</h2>
        <ListContacts contacts={this.state.contacts}></ListContacts>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<PhoneBook />);
