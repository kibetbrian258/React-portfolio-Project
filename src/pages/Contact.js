import React, { useState } from "react";
import Footer from "../components/footer";
import axios from "axios";
import ContactList from "./ContactList";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/contact", {
      name,
      email,
      message,
    });

    setSubmitted(true);
  };

  if (submitted) {
    return <ContactList />;
  }

  return (
    <div className="main-contact-form">
      <div className="contact-form">
        <h3>Get in Touch</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            cols="30"
            rows="5"
            placeholder="MESSAGE"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <input type="submit" name="submit" value="SUBMIT" />
        </form>
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </div>
  );
};

// const ContactList = () => {
//   const [contacts, setContacts] = useState([]);

//   React.useEffect(() => {
//     const fetchContacts = async () => {
//       const response = await axios.get("http://localhost:5000/api/contacts");
//       setContacts(response.data);
//     };

//     fetchContacts();
//   }, []);

//   return (
//     <div className="contact-list">
//       <h3>Contact Submissions</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Message</th>
//           </tr>
//         </thead>
//         <tbody>
//           {contacts.map((contact) => (
//             <tr key={contact._id}>
//               <td>{contact.name}</td>
//               <td>{contact.email}</td>
//               <td>{contact.message}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

export default Contact;
