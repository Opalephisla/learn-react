import React from "react"

const Navbar = () => {
  return (
    <header className="header">
      <img
        className="header--image"
        src="./images/troll-face.png"
        alt="troll-face"
      />
      <h4 className="header--title">Meme Generator</h4>
      <span className="header--description">React Course - Project 3</span>
    </header>
  )
}

export default Navbar
