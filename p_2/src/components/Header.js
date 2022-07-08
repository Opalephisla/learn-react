import React from "react"

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <img
          className="nav-img"
          src="../assets/React-icon.png"
          alt="react-icon"
        />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
