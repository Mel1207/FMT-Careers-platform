import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import PageCareers from "./pages/PageCareers"
import PageHome from "./pages/PageHome"
import PageAbout from "./pages/PageAbout"
import PageAdmin from "./pages/PageAdmin"

function App() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <>
      {location.pathname !== '/admin/5b1' ? (
        <>
          {/* CAREERS INTERFACE */}
          <Navbar /> 
          <div className="app">
            <Routes>
              <Route path="/" exact element={<PageHome />} />
              <Route path="/about" element={<PageAbout />} />
              <Route path="/careers" element={<PageCareers />}/>
            </Routes>
          </div>
        </>
      ) : (
        <>
          {/* ADMIN INTERFACE */}
          <div className="app">
            <Routes>
              <Route path="/admin/5b1" element={<PageAdmin />}/>
            </Routes>
          </div>
        </>
      )}
    </>
  )
}

export default App
