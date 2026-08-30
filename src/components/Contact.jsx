import { useState } from 'react'
import { personalInfo, socialLinks } from '../data'
import SocialIcon from './Icons'
import '../css/Contact.css'

function Contact() {
  // what the visitor has typed into the three inputs
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  // one error message for each input that is wrong
  const [errors, setErrors] = useState({})
  // true after a message is sent, so I can show a thank you note
  const [sent, setSent] = useState(false)

  // This runs every time the visitor types something.
  // event.target.name is the name I gave the input below ("name",
  // "email" or "message"), so one function works for all three.
  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  function handleSubmit(event) {
    event.preventDefault() // stops the page from reloading

    // check the inputs and collect the problems in one object
    const newErrors = {}

    if (form.name === '') {
      newErrors.name = 'Please tell me your name.'
    }

    if (form.email === '') {
      newErrors.email = 'I need an email address to reply to.'
    } else if (!form.email.includes('@')) {
      newErrors.email = 'That email does not look right.'
    }

    if (form.message.length < 10) {
      newErrors.message = 'Please write at least 10 characters.'
    }

    setErrors(newErrors)

    // Object.keys gives me a list of the errors I found.
    // If that list is empty then nothing was wrong.
    if (Object.keys(newErrors).length === 0) {
      // NOTE: this does not really send an email yet. To make it work,
      // sign up for a free service like Formspree or EmailJS and send
      // the form to them here.
      console.log('Message from the contact form:', form)

      setSent(true)
      setForm({ name: '', email: '', message: '' }) // empty the inputs
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let&apos;s build <span className="accent-text">something</span>
          </h2>
          <p className="section-subtitle">
            Got a project, a job, or just a question? Send me a message.
          </p>
        </div>

        <div className="contact-grid">
          {/* ---- my details on the left ---- */}
          <div className="contact-info">
            <div className="info-row card">
              <span className="info-label">Email</span>
              <a href={'mailto:' + personalInfo.email}>{personalInfo.email}</a>
            </div>

            <div className="info-row card">
              <span className="info-label">Phone</span>
              <a href={'tel:' + personalInfo.phone}>{personalInfo.phone}</a>
            </div>

            <div className="info-row card">
              <span className="info-label">Location</span>
              <span>{personalInfo.location}</span>
            </div>

            <ul className="contact-socials">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} target="_blank" rel="noreferrer" title={link.name}>
                    <SocialIcon name={link.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---- the form on the right ---- */}
          <form className="contact-form card" onSubmit={handleSubmit}>
            {/* this note only shows up after the form is sent */}
            {sent && <p className="success-note">Thanks! I will reply as soon as I can.</p>}

            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error-note">{errors.name}</span>}

            <label htmlFor="email">Your email</label>
            <input
              id="email"
              name="email"
              type="text"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-note">{errors.email}</span>}

            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error-note">{errors.message}</span>}

            <button type="submit" className="btn btn-primary form-btn">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
