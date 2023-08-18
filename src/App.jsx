//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Balances from './pages/Balances'
import Carrito from './pages/Carrito'
import NotFound from './pages/NotFound'
import Producto from './pages/Producto'
import { MyContextProvider } from './Contexto.jsx';
import './index.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <MyContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Inicio />} />
            <Route path='/Inicio' element={<Inicio />} />
            <Route path='/Productos' element={<Productos />} />
            <Route path='/Balances' element={<Balances />} />
            <Route path='/Carrito' element={<Carrito />} />
            <Route path='/Producto/*' element={<Producto />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MyContextProvider>

    </div>
  )
}

export default App
