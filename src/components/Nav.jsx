//import { useState } from 'react'
import './Nav.css'

function Nav() {
    //const [count, setCount] = useState(0)
  
    return (
      <>
        <div className='navbar'>
        <a className='nav_inicio selected-nav' href="/Inicio">Inicio</a><a className='nav_productos' href="/Productos">Productos</a><a className='nav_balance' href="/Balances">Balances</a>
        </div>
      </>
    )
  }
  
  export default Nav