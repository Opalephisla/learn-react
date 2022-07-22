import React from "react"
import PhotoGrid from "../images/photo-grid.png"

const Hero = () => {
  return (
    <section className="hero">
      <img src={PhotoGrid} alt="grid-pictures" className="hero--photo" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--description">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home.
      </p>
    </section>
  )
}

export default Hero
