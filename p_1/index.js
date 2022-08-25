import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

const Page = () => (
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
)

ReactDOM.render(<Page />, document.getElementById("root"))
