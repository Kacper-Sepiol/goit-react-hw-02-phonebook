import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class PhoneBook extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <h1>PhoneBook</h1>

        <h2>Contacts</h2>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<PhoneBook />);
