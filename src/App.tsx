import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="bg-base-100 w-full" data-theme="nord">
      <Navbar/>
      {/* <div className="flex gap-x-2">
        <Sidebar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </div> */}
          <div className="drawer lg:drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content px-5">
              {/* Page content here */}
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Main/>}/>
                  <Route path="/cart" element={<Cart/>}/>
                </Routes>
              </BrowserRouter>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <Sidebar/>
            </div>
          </div>
      <Footer/>
    </div>
  )
}

export default App