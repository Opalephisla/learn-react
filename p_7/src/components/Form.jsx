import React, { useState } from "react"

const Form = () => {
  const getRandomMeme = (e) => {
    e.preventDefault()
    const memesArray = allMeme.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }))
  }
  // const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }))
  }

  React.useEffect(function () {
    console.log("Effect ran")
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data))
  }, [])
  const [allMeme, setAllMeme] = useState([])
  return (
    <main>
      <form className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text here"
          name="topText"
          onChange={handleChange}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text here"
          name="bottomText"
          onChange={handleChange}
        />
        <button onClick={getRandomMeme} className="form--button">
          Get a new meme image 🖼
        </button>
      </form>
      <div className="meme">
        <img className="meme--image" src={meme.randomImage} alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Form
