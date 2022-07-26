import "./App.css"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map((card) => {
    return <Card key={card.id} {...card} />
  })
  return (
    <>
      <Navbar />
      <section className="card-group">{cards}</section>
    </>
  )
}

export default App
