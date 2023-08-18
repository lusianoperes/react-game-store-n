import { useState } from 'react'
import './UserProfile.css'
import usersData from '../users-data.json'
import { MyContext } from '../Contexto'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function UserProfile() {

  const { UserId, setUserId } = useContext(MyContext);
  const user = usersData.find((user) => user.userId === UserId);

  console.log(JSON.stringify(localStorage.getItem("datosUsuarios")));
  const CargarUsuario = () => {
    if (UserId === '') {
      return (
        <>
          <div className='nombre-status'>
            <div className='cuadro-inicio'>INICIA SESIÓN</div>
              <div className='cuadro-registro'>REGÍSTRATE</div>
          </div>
        </>
      )
    }
    else {
      return (
        <>
          <div className='nombre-status'>
            <div className='nombre'>{user.username}</div>
            {user.admin === false ? null : <div className='status'>Administrador</div>}
          </div>
          <div className='imagen-perfil'><img src="src/Images/default_pfp.jpg" /></div>
          <Link to='/Carrito'><div className='carrito'><img src="src/Images/carrito.png" /></div></Link>
        </>
      )
    }
  };

  return (
    <>
      <div className='container-perfil'>
        {CargarUsuario()}
      </div>
    </>
  )
}

export default UserProfile