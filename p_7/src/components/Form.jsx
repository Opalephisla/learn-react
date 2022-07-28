import React from "react"

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted")
  }
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
      </form>
    </>
  )
}

export default Form
