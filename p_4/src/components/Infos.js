import React from "react"
import Picture from "../assets/Rectangle 90.png"
import LinkedIn from "../assets/linkedin.png"
import Mail from "../assets/Mail.png"

const Infos = () => {
  return (
    <div className="infos">
      <img src={Picture} alt="Photo info" />
      <h1>Laura Smith</h1>
      <p className="infos-job">Frontend Developer</p>
      <p className="infos-website">laurasmith.website</p>
      <div className="infos-btns">
        <a href="#">
          <button className="infos-mail">
            <img src={Mail} />
            Email
          </button>
        </a>
        <a href="#">
          <button className="infos-linkedin">
            <img src={LinkedIn} />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  )
}

export default Infos
