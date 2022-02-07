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
        <form className=" contact-form__form" id="form" onSubmit={sendEmail}>
          <div className="contact-form__header">
            <div className="contact-form__title">Get In Touch</div>

            <button type="submit" className="form-control contact-form__submit">
              {buttonText}
            </button>
          </div>
          <div className="contact-form__form-content">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name..."
            />
            <input
              type="email"
              name="user_email"
              className="form-control"
              placeholder="Email..."
            />
            <textarea
              name="message"
              rows="4"
              className="form-control contact-form__form-message"
              placeholder="Say hello..."
            />
          </div>
        </form>
      </div>
    </div>
  )
}
