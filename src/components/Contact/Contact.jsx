import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

const Contact = () => {
  const form = useRef()
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    console.log("showPopup state changed:", showPopup)
  }, [showPopup])

  console.log("Rendering Contact component, showPopup:", showPopup)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_46t0kzk', 'template_cfeh85f', form.current, { publicKey: 'QkC9WzJs7jhLXZNbf' })
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");
          console.log("Setting showPopup to true");
          e.target.reset()
          setShowPopup(true) // Afficher le pop-up
          setTimeout(() => {setShowPopup(false)}, 8000) // Cacher le pop-up après 8 secondes
        },
        (error) => {
          console.log('FAILED', error.text);
        }
      )
  }

  return (
    <section id="contact">
      {showPopup && (
        <div className="popup">
          Message envoyé avec succès !
        </div>
      )}
      <h2>Me Contacter</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input type="text" name='user_name' />
        <label htmlFor="email">Email</label>
        <input type="email" name='user_email' />
        <label htmlFor='message'>Message</label>
        <textarea name="message" />
        <input type="submit" value='Send' />
      </form>
    </section>
  )
}

export default Contact