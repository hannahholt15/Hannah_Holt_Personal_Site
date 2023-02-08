import { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Footer from '../shared/Footer';

const Contacts = () => {
  const [contacts, setContacts] = useState([])

  useEffect( () => {
    axios.get('/api/contacts')
      .then(res => setContacts(res.data))
      .catch( err => console.log(err))
  }, [])

  const addContact = (contact) => {
    axios.post('/api/contacts', { contact })
      .then(res => setContacts([...contacts, res.data]))
      .catch( err => console.log(err))
  }

  const updateContact = (id, contact) => {
    axios.put(`/api/contacts/${id}`, { contact })
      .then( res => {
        const newUpdatedContact = contact.map(c => {
          if (c.id === id) {
            return res.data
          }
          return c
        })
        setContacts(newUpdatedContact)
      })
      .catch( err => console.log(err))
  }

  const deleteContact = (id) => {
    axios.delete(`/api/contacts/${id}`)
      .then( res => setContacts( contacts.filter( c => c.id !== id )))
      .catch( err => console.log(err))
  }

  return (
    <>
    <br/>
    <br/>
    <br/>
      <ContactForm addContact={addContact} />
      <br />
      <h1>All Contacts</h1>
      <ContactList
        contacts={contacts}
        updateContact={updateContact}
        deleteContact={deleteContact}
      />
      <Footer/>
    </>
  )
}
export default Contacts;