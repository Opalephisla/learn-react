import React from "react"
import AirBnbLogo from "../images/airbnb-logo.png"

const Navbar = () => {
  return (
    <nav>
      <img className="nav--logo" src={AirBnbLogo} alt="airbnb-logo" />
    </nav>
  )
}

export default Navbar
