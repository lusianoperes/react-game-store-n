//import { useState } from 'react'
import './NotFoundContent.css'

function NotFoundContent() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <div className='notfound-container'>
                <img src="src/Images/notfoundskull.png" alt="skullnotfound" />
                <div className='error-msg'>UPS! ERROR 404</div>
                <div className='nodisponible-msg'>Parece que la página a la que intentas acceder no se encuentra disponible o no existe</div>
                <button className='return-button' onClick={() => {window.location.href = '/Inicio';}}>Volver al Inicio</button>
            </div>
        </>
    )
}

export default NotFoundContent