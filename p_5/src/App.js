import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import KatiePhoto from "./images/image.png"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        status={
          ["sold out", "available", "unavailable"][
            Math.floor(Math.random() * 3)
          ]
        }
        img={KatiePhoto}
        rating="6"
        title="Life lessons with Katie Zafares"
        country="USA"
        price="136"
      />
    </>
  )
}

export default App
