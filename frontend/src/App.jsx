import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ContentPage from './components/ContentPage'
import Nav from './components/Nav'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProductPage from './components/ProductPage'

function App() {
const [amount, setAmount] = useState(0)
const [category, setCategory] = useState("Ninjago")
const [cart, setCart] = useState([])

  return (
    <Layout cart={cart} setCart={setCart} amount={amount} category={category}>
        <Routes>
            <Route path="/" element={<Home setAmount={setAmount} cart={cart} setCart={setCart} />}/>
            <Route path="/produkter/:slug" element={<ContentPage amount={amount} setAmount={setAmount} category={category} setCart={setCart} cart={cart}/>}/>
            <Route path="/produkt/:slug" element={<ProductPage/>} />
        </Routes>
    </Layout>
  )
}

export default App
