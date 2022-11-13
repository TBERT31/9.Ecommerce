import React from 'react'
import './Contact.css'


export default function Contact() {
  return (
    <div>
      <h2 className="contact-title">
        Contactez-nous
      </h2>
      <form className='form-container'>
      <label htmlFor="email">Votre mail</label>
      <input type="email" id='email' required placeholder='Votre mail'/>

      <label htmlFor="message">Votre message</label>
      <textarea id="message" required placeholder='Votre message'></textarea>

      <button>Envoyez</button>
      </form>
    </div>
  )
}
