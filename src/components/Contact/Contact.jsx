import {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

const Contact = () => {

  const form = useRef()

  const sendEmail = (e)=> {
    e.preventDefault()

    emailjs
    .sendForm('service_46t0kzk', 'template_cfeh85f', form.current, { publicKey : 'QkC9WzJs7jhLXZNbf'})
    .then(
      (result)=>{
        console.log(result.text);
        console.log("Message Sent");
        e.target.reset()
      },
      (error)=>{
        console.log('FAILED', error.text);
      }
    )
  }

  return (
    <section id="contact">
      <h2>Me Contacter</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input type="text" name='user_name'/>
        <label htmlFor="email">Email</label>
        <input type="text" name='user_email'/>
        <label htmlFor='message'>Message</label>
        <textarea name="message" />
        <input type="submit" value='Send' />
      </form>
    </section>
  )
}

export default Contact