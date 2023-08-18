//import { useState } from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'
function Logo() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Link to='/Inicio'><div className='logo'>
        game💀ver
      </div></Link>
    </>
  )
}

export default Logo