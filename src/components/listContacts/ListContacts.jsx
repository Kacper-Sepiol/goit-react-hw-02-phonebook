const ListContacts = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>{contact.name}</li>
    ))}
  </ul>
);

export default ListContacts;
