//import { useState } from 'react'
import './NotFoundContent.css'
import { Link } from 'react-router-dom'
function NotFoundContent() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <div className='notfound-container'>
                <img src="src/Images/notfoundskull.png" alt="skullnotfound" />
                <div className='error-msg'>UPS! ERROR 404</div>
                <div className='nodisponible-msg'>Parece que la página a la que intentas acceder no se encuentra disponible o no existe</div>
                <Link to='/Inicio'><div className='return-button'>Volver al Inicio</div></Link>
            </div>
        </>
    )
}

export default NotFoundContent