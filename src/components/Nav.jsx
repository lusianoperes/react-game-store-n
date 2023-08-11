import { useLocation } from 'react-router-dom'
import './Nav.css'

function Nav() {
    
    const location = useLocation();

    return (
      <>
        <div className='navbar'>
        <a className={location.pathname === '/Inicio' || location.pathname === '/' ? 'nav_inicio selected-nav' : 'nav_inicio'} href="/Inicio">Inicio</a>
        <a className={location.pathname === '/Productos' ? 'nav_productos selected-nav' : 'nav_productos'} href="/Productos">Productos</a>
        <a className={location.pathname === '/Balances' ? 'nav_balance selected-nav' : 'nav_balance'} href="/Balances">Balances</a>
        </div>
      </>
    )
  }
  
  export default Nav