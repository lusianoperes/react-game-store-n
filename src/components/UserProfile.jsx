//import { useState } from 'react'
import './UserProfile.css'

function UserProfile() {
    //const [count, setCount] = useState(0)
  
    return (
      <>
        <div className='container-perfil'>
            <div className='nombre-status'>
                <div className='nombre'>Leonardo Duca</div>
                <div className='status'>Administrador</div>
            </div>
            <div className='imagen-perfil'><img src="src/Images/default_pfp.jpg"/></div>
            <a href='/Carrito' className='carrito'><img src="src/Images/carrito.png"/></a>
        </div>
      </>
    )
  }
  
  export default UserProfile