import { Navbar, Serices, Welcome, Transactions, Footer } from "./components"


const App = () => {

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Serices />
      <Footer />
    </div>
  )
}

export default App
