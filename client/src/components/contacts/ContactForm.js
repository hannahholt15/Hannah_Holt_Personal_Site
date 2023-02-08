import { useState, useEffect } from 'react';

const ContactForm = ({ addContact, id, name, email, message, updateContact, setEdit }) => {
  const [contact, setContact] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    if (id) {
      setContact({ name, email, message })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateContact(id, contact)
      setEdit(false)
      window.location.reload();
    } else {
      addContact(contact)
    }
    setContact({ name: '', email: '', message: '' })
  }

  return (
    <>
      <h2>{id ? "Update" : "Add New"} Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          name='name' 
          value={contact.name} 
          onChange={(e) => setContact({ ...contact, name: e.target.value })} 
          required
        />
        <label>Email</label>
        <input
          name='email' 
          value={contact.email} 
          onChange={(e) => setContact({ ...contact, email: e.target.value })} 
          required
        ></input>
        <label>Message</label>
        <textarea
          name='message' 
          value={contact.message} 
          onChange={(e) => setContact({ ...contact, message: e.target.value })} 
          required
          max='5'
          min='0'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ContactForm;