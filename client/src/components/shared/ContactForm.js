import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import { Form, ContactTextInput, ContactTextArea } from '../styles/ContactStyles';
import { MainBtn, HomeSubTitle } from '../styles/SharedStyles';

const ContactForm = () => {
  const form = useRef();
  const [contact, setContact] = useState({ from_name: '', reply_to: '', message_html: '' })
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  // console.log ( typeof(process.env.REACT_APP_PUBLIC_KEY) )
  //   debugger

    // let template_params = {
    //   "reply_to": contact.reply_to,
    //   "from_name": contact.from_name,
    //   "to_name": process.env.REACT_APP_SERVICE_ID,
    //   "message_html": contact.message_html
    // }

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID, 
      process.env.REACT_APP_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_PUBLIC_KEY,
    )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    navigate('/thanks')
    setContact({ from_name: '', reply_to: '', message_html: ''})
  }

  return(
    <Form ref={form} onSubmit={handleSubmit}>
        <HomeSubTitle className='main-font'>Contact Me</HomeSubTitle>
        <ContactTextInput className='main-font'
          name='from_name'
          value={contact.from_name}
          onChange={(e) =>  setContact({ ...contact, from_name: e.target.value })}
          required 
          placeholder='Name'
        />
        <ContactTextInput className='main-font'
          name='reply_to'
          value={contact.reply_to}
          onChange={(e) =>  setContact({ ...contact, reply_to: e.target.value })}
          required 
          placeholder='Email'
        />
        <ContactTextArea className='main-font'
          name='message_html'
          value={contact.message_html}
          onChange={(e) =>  setContact({ ...contact, message_html: e.target.value })}
          required 
          placeholder='Message'
        >
        </ContactTextArea>
      <MainBtn
        type='submit'
        className='main-font'
        // // rel='noreferrer'
        // variant='outline-dark'
        >
          Submit
        </MainBtn>
    </Form>
  )
}

export default ContactForm