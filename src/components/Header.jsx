import React, { useState } from 'react'
import './Header.css'

function Header({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleNavClick = (page) => {
    onNavigate(page)
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <button
            className={`nav-link ${currentPage === 'cases' ? 'active' : ''}`}
            onClick={() => handleNavClick('cases')}
          >
            案例
          </button>
          <button
            className={`nav-link ${currentPage === 'tools' ? 'active' : ''}`}
            onClick={() => handleNavClick('tools')}
          >
            工具
          </button>
          <button
            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
          >
            关于
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
