import Header from "./Header"

const Content = () => (

)

const Footer = () => (

)

const Page = () => (
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
)

ReactDOM.render(<Page />, document.getElementById("root"))
