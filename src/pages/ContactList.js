import React, { useState, useEffect } from "react";
import axios from "axios";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await axios.get("http://localhost:5000/api/contacts");
      setContacts(response.data);
    };

    fetchContacts();
  }, []);

  return (
    <div className="contact-list">
      <h3>Contact Submissions</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ContactList;
