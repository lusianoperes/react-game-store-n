//import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import TopSellers from './components/TopSellers'
import Footer from './components/Footer'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className='container-app'>  
        <Header/>
        <Slider/>
        <TopSellers/>
        <Footer/>
    </div>
  )
}

export default App
