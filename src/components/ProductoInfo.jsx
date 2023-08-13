//import { useState } from 'react'
import './ProductoInfo.css'

function ProductoInfo() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <div className='productinfo-container'>
                <div className='producto-grande'></div>
                <div className='relacionados-container'>
                    <div className='relacionados-text'>Juegos relacionados</div>
                    <div className='juegos-relacionados'></div>
                </div>
            </div>
        </>
    )
}

export default ProductoInfo