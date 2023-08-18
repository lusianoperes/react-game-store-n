import { Link, useLocation } from 'react-router-dom'
import './Nav.css'
import usersData from '../users-data.json'
import { MyContext } from '../Contexto'
import { useContext } from 'react'

function Nav() {
    
    const location = useLocation();
    const { UserId, setUserId } = useContext(MyContext);
    const user = usersData.find((user) => user.userId === UserId);

    return (
      <>
        <div className='navbar'>
        <Link to='/Inicio'><div className={location.pathname === '/Inicio' || location.pathname === '/' ? 'selected-nav' : 'nav_inicio'}>Inicio</div></Link>
        <Link to='/Productos'><div className={location.pathname === '/Productos' ? 'selected-nav' : 'nav_productos'}>Productos</div></Link>
        {UserId === '' ? null : (user.admin === true ? <Link to='/Balances'><div className={location.pathname === '/Balances' ? 'selected-nav' : 'nav_balance'}>Balances</div></Link> : null)}
        </div>
      </>
    )
  }
  
  export default Nav