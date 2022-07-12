import React from "react"
import Facebook from "../assets/facebook.png"
import Github from "../assets/github.png"
import Twitter from "../assets/twitter.png"
import Instagram from "../assets/instagram.png"

const Footer = () => {
  return (
    <footer>
      <a href="#">
        <img src={Twitter} />
      </a>
      <a href="#">
        <img src={Facebook} />
      </a>
      <a href="#">
        <img src={Instagram} />
      </a>
      <a href="#">
        <img src={Github} />
      </a>
    </footer>
  )
}

export default Footer
