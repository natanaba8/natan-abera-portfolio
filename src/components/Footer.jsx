import { navLinks, personalInfo, socialLinks } from '../data'
import SocialIcon from './Icons'
import '../css/Footer.css'

function Footer() {
  // I read the year from the computer so I never have to change it by hand
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <ul className="footer-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        <ul className="footer-socials">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a href={link.url} target="_blank" rel="noreferrer" title={link.name}>
                <SocialIcon name={link.icon} />
              </a>
            </li>
          ))}
        </ul>

        <p className="footer-note">
          © {year} {personalInfo.name}. Built with React.
        </p>
      </div>
    </footer>
  )
}

export default Footer
