import { useState } from 'react'
import { navLinks, personalInfo } from '../data'
import '../css/Navbar.css'


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <nav className="container navbar-inner">
        <a href="#home" className="logo">
          <span className="logo-badge">{personalInfo.initials}</span>
          <span className="logo-text">{personalInfo.name}</span>
          <span>{personalInfo.catagory}</span>
        </a>

        {/* On a phone this list is hidden until menuOpen is true */}
        <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navLinks.map((link) => (
            <li key={link.name}>
              {/* closing the menu after a click, so it does not stay open */}
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* this button only shows up on small screens */}
        <button
          type="button"
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open or close the menu"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>
    </header>
  )
}

export default Navbar
