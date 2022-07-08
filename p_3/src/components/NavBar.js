import React from "react"
import logo from "../assets/react-logo.png"

const NavBar = () => {
  return (
    <header>
      <nav className="nav">
        <img className="nav-img" src={logo} alt="react-icon" />
        <div className="nav-items">
          <h3>ReactFacts</h3>
          <h4>React Course - Project 1</h4>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
