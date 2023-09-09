import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FormPhoneBook from './components/formPhoneBook/FormPhoneBook';
import ListContacts from 'components/listContacts/ListContacts';

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
    const { contacts, name } = this.state;
  };

  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
        <FormPhoneBook></FormPhoneBook>

        <h2>Contacts</h2>
        <ListContacts></ListContacts>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<PhoneBook />);
