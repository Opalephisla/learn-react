import React from "react"
import logo from "../assets/React-icon.png"

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <a href="#">
          <img className="nav-img" src={logo} alt="react-icon" />
        </a>
        <ul className="nav-items">
          <a href="#pricing" className="nav-item">
            <li>Pricing</li>
          </a>
          <a href="#about" className="nav-item">
            <li>About</li>
          </a>
          <a href="#contact" className="nav-item">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
    </header>
  )
}

export default Header
