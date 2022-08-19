import React, { useState } from "react"
import memesData from "../memesData"

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    setMemeImage(
      memesData.data.memes[
        Math.floor(Math.random() * memesData.data.memes.length)
      ]["url"],
    )
  }
  const meme_ph = "./images/meme_ph.png"
  const [memeImage, setMemeImage] = useState("")
  return (
    <main>
      <form className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text here"
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text here"
        />
        <button onClick={handleSubmit} className="form--button">
          Get a new meme image 🖼
        </button>
      </form>
      <img className="meme--image" src={memeImage || meme_ph} alt="meme" />
    </main>
  )
}

export default Form
