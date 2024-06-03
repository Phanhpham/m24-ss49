import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route,Link,NavLink,useNavigate} from "react-router-dom"
import About from './assets/Components/About'
import Home from './assets/Components/Home'
import Contact from './assets/Components/Contact'
import NotFound from './assets/Components/NotFound'
import Home1 from './assets/Components/B1/Home1'
import Home2 from "./assets/Components/B2/Home2"
import Home3 from './assets/Components/B3/Home3'
import Home4 from './assets/Components/B4/Home4'
import Home5 from './assets/Components/B5/Home5'
import Home6 from './assets/Components/B6/Home6'
import About1 from './assets/Components/B6/About1'
import Home7 from './assets/Components/B7/Home7'
import Detail from './assets/Components/B7/Detail'
import Product from './assets/Components/B7/Product'
import Admin from './assets/Components/b8/Admin'
import Product2 from './assets/Components/b8/Product2'
import Account from './assets/Components/b8/Account'
function App() {
  const [count, setCount] = useState(0)
  const navigate=useNavigate();
  const handleRedirect =()=>{
    // chuyen huong ve trag home
    navigate("/")
  }
  return (
    <>
    {/* <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav> */}

<nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to ="/home1">Home1</NavLink>
      <NavLink to ="/home2">Home2</NavLink>
      <NavLink to ="/home3">Home3</NavLink>
      <NavLink to ="/home4">Home4</NavLink>
      <NavLink to ="/home5">Home5</NavLink>
      <NavLink to ="/home6">Home6</NavLink>
      <NavLink to ="/about1">About1</NavLink>
      <NavLink to ="/detail">Detail</NavLink>
      <NavLink to ="/home7">Home7</NavLink>
      <NavLink to ="/product">Product</NavLink>
      <NavLink to ="/admin">Admin</NavLink>
      <NavLink to ="/account">Account</NavLink>
      <NavLink to ="/product2">Product2</NavLink>
    <button onClick={handleRedirect}>chuyen huong ve trang home</button>
    <button onClick={() => navigate(-1)}>Quay lại</button>
      <button onClick={() => navigate(1)}>Trang trước</button>
    </nav>

    {/* khu vuc dinh tuyen cac router ,khong duoc viet  html trong nay*/}
      <Routes>
        {/* Định nghĩa các Router cho component */}
        <Route path='/about' element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>

        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/*" element ={<NotFound/>}></Route>
        <Route path="/home1" element ={<Home1/>}></Route>
        <Route path="/home2" element ={<Home2/>}></Route>
        <Route path="/home3" element ={<Home3/>}></Route>
        <Route path="/home4" element ={<Home4/>}></Route>
        <Route path="/home5" element ={<Home5/>}></Route>
        <Route path="/home6" element ={<Home6/>}></Route>
        <Route path="/about1" element ={<About1/>}></Route>
        <Route path="/home7" element ={<Home7/>}></Route>
        <Route path="/detail" element ={<Detail/>}></Route>
        <Route path="/product" element ={<Product/>}></Route>
        <Route path="/admin" element ={<Admin/>}></Route>
        <Route path="/product2" element ={<Product2/>}></Route>
        <Route path="/account" element ={<Account/>}></Route>
      </Routes>
    </>
  )
}

export default App
