import { useState } from 'react';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';

const ContactShow = ({ id, name, email, message, updateContact, deleteContact, created_at }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
          <>
            <ContactForm 
              id={id}
              name={name}
              email={email}
              message={message}
              updateContact={updateContact}
              setEdit={setEdit}
            />
            <button onClick={() => setEdit(false)}>
              Cancel
            </button>
          </>
        :
        <>
          <h3>{name}</h3>
          <h4>{email}</h4>
          <p>{message}</p>
          <button onClick={() => setEdit(true)}>
            Edit
          </button>
          <button onClick={() => deleteContact(id)}>
            Delete
          </button>
        </>
      }
    </>
  )
}

export default ContactShow;