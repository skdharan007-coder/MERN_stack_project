import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Account from "./pages/account"
import Cart from "./pages/cart"
import Footer from "./components/Footer"
import Signup from "./pages/Signup"
import { useState } from "react"


function App() {

  let [start,added]=useState(0) 
  return (

    <>

      <Navbar start={start} />

      <Routes>

        <Route path="/" element={<Home added={added}/>} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup/>}/>
      </Routes>

      <Footer />
    </>

  )
}
export default App
