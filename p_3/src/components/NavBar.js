import React from "react"
import logo from "../assets/react-logo.png"

const NavBar = () => {
  return (
    <header>
      <nav className="nav">
        <img className="nav-img" src={logo} alt="react-icon" />
        <h3 className="nav-logotext">ReactFacts</h3>
        <h4 className="nav-title">React Course - Project 1</h4>
      </nav>
    </header>
  )
}

export default NavBar
