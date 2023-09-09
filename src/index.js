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
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
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
    return (
      <div>
        <h1>PhoneBook</h1>
        <FormPhoneBook
          name={this.state.name}
          number={this.state.number}
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
