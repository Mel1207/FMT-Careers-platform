import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import PageCareers from "./pages/PageCareers"
import PageHome from "./pages/PageHome"
import PageAbout from "./pages/PageAbout"

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/careers" exact element={<PageCareers />}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App
