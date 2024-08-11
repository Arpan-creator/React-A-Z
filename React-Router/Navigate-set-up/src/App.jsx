import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Navigate from './components/Navigate'



function App() {

  return (
    <div>
      <Navigate/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route  path="/products" element={<Products/>}/>
        <Route  path="/contact" element={<Contact/>}/>
      </Routes>

    </div>
  )
}

export default App
