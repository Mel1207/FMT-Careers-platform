import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import PageCareers from "./pages/PageCareers"
import PageHome from "./pages/PageHome"
import PageAbout from "./pages/PageAbout"
import PageAdmin from "./pages/PageAdmin"
import NavbarAdmin from "./components/NavbarAdmin"

function App() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <>
      {location.pathname !== '/admin' ? <Navbar /> : <NavbarAdmin />}
      
      <div className="app">
        <Routes>
          <Route path="/" exact element={<PageHome />} />
          <Route path="/about" element={<PageAbout />} />
          <Route path="/careers" element={<PageCareers />} />
          <Route path="/admin" element={<PageAdmin />} />
        </Routes>
      </div>
    </>
  )
}

export default App
