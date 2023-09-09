import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FormPhoneBook from './components/formPhoneBook/FormPhoneBook';

class PhoneBook extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
        <FormPhoneBook></FormPhoneBook>

        <h2>Contacts</h2>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<PhoneBook />);
