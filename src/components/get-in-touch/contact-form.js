import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './contact-form.scss'

export const ContactForm = () => {
  const [buttonText, setButtonText] = useState('Send Inquiry')

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_n2eq9jh',
        'template_b6ze716',
        e.target,
        'user_hv1Io7BwHTvuk2FdRG9on'
      )
      .then(() => {
        document.getElementById('form').reset()
        setButtonText('Message Sent')

        setTimeout(() => {
          setButtonText('Send Inquiry')
        }, 3000)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container contact-form-wrapper" id="contact">
      <div className="contact-form">
        <div className="contact-form__title">Get In Touch</div>
        <div>
          <form
            className="row contact-form__form"
            id="form"
            onSubmit={sendEmail}
          >
            <label>Name: </label>
            <input type="text" name="name" className="form-control" placeholder="Enter your name..."/>

            <label>Email: </label>
            <input type="text" name="user_email" className="form-control" placeholder="Enter valid email..."/>

            <label>Message: </label>
              <textarea
                name="message"
                rows="4"
                className="form-control contact-form__form-message"
                placeholder="Type your message..."
              />
            

            <button type="submit" className="form-control contact-form__submit">
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
