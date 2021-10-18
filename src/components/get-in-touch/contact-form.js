import React from 'react'
import emailjs from 'emailjs-com'
import './contact-form.scss'

export const ContactForm = () => {
  // const [isMessageSent, setMessageIsSent] = false
  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_n2eq9jh',
        'template_b6ze716',
        e.target,
        'user_hv1Io7BwHTvuk2FdRG9on'
      )
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="container contact-form-wrapper" id="contact">
      <div className="contact-form">
        <div className="contact-form__title">Get In Touch!</div>
        <div>
          <form className="row contact-form__form" onSubmit={sendEmail}>
            <label>Name: </label>
            <input type="text" name="name" className="form-control" />

            <label>Email: </label>
            <input type="text" name="user_email" className="form-control" />

            <label>Message: </label>
            <input name="message" rows="4" className="form-control contact-form__form-message" />

            <button type="submit" className="form-control contact-form__submit">Send Inquiry</button>
          </form>
        </div>
      </div>
    </div>
  )
}
