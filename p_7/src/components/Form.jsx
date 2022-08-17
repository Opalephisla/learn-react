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
  const [memeImage, setMemeImage] = useState("")
  return (
    <>
      <form className="form">
        <label className="form-label">
          <input
            type="text"
            className="form-control"
            placeholder="Top text here"
          />
        </label>
        <label className="form-label">
          <input
            type="text"
            className="form-control"
            placeholder="Bottom text here"
          />
        </label>
        <button onClick={handleSubmit} className="btn" type="submit">
          Get a new meme image 🖼
        </button>
        <div className="meme-container"></div>
      </form>
      <img className="meme-image" src={memeImage} alt="meme" />
    </>
  )
}

export default Form
