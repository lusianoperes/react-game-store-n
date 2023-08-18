//import { useState } from 'react'
import '../reset.css'
import './Header.css'
import Logo from './Logo.jsx'
import UserProfile from './UserProfile.jsx'
import Nav from './Nav'

function Header() {
    //const [count, setCount] = useState(0)
  
    return (
      <>
        <div className='topbar'>
            <Logo/>
            <UserProfile/>
        </div>
        <Nav/>
      </>
    )
  }
  
  export default Header