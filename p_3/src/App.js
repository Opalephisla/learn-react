import "./App.css"
import NavBar from "./components/NavBar"
import Main from "./components/Main"
import React, { useState } from "react"

function App() {
  const [theme, setTheme] = useState("")
  const toggleDarkMode = () => {
    setTheme((prevTheme) => !prevTheme)
  }
  return (
    <div className="container">
      <NavBar darkMode={theme} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={theme} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}

export default App
