//import { useState } from 'react'
import './ProductoInfo.css'

function ProductoInfo(producto) {
    //const [count, setCount] = useState(0)

    return (
        <>
            <div className='productinfo-container'>
                <div className='producto-grande'>
                    <div className='product-price'>$69</div>
                    <img src="src/Images/modern_warfare_2.png" alt="modernwarfareII" />
                    <div className='info-producto'>
                        
                        <div className='product-name'>Modern Warfare II</div>
                        <div className='product-description'>Modern Warfare II trae un juego de última generación para los fanáticos con un manejo de armas completamente nuevo, una nueva armería y otras innovaciones gráficas y de juego que disparan la franquicia a nuevas alturas.</div>
                        <div className='product-bottombar'>
                            <div className='product-developer'>Activision</div>
                            <button className='cart-button'>
                                <div className='plus-sign'>+</div>
                                <img src="src/Images/carritoverde.png" alt="carritoverde" />
                            </button>
                        </div>
                    </div>

                </div>
                <div className='relacionados-container'>
                    <div className='relacionados-text'>Juegos relacionados</div>
                    <div className='caja-juegos-relacionados'>
                        <div className='caja-juego'>
                            <img src="src/Images/Resident-Evil-Village-Gold-Edition.png" alt="residentevilvillage" />
                            <div className='caja-juego-text'>
                                <div className='juego-name'>Resident Evil Village</div>
                                <div className='juego-price'>$ 39</div>
                            </div>
                        </div>

                        <div className='caja-juego'>
                            <img src="src/Images/Resident-Evil-Village-Gold-Edition.png" alt="residentevilvillage" />
                            <div className='caja-juego-text'>
                                <div className='juego-name'>Resident Evil Village</div>
                                <div className='juego-price'>$ 39</div>
                            </div>
                        </div>

                        <div className='caja-juego'>
                            <img src="src/Images/Resident-Evil-Village-Gold-Edition.png" alt="residentevilvillage" />
                            <div className='caja-juego-text'>
                                <div className='juego-name'>Resident Evil Village</div>
                                <div className='juego-price'>$ 39</div>
                            </div>
                        </div>

                        <div className='caja-juego'>
                            <img src="src/Images/Resident-Evil-Village-Gold-Edition.png" alt="residentevilvillage" />
                            <div className='caja-juego-text'>
                                <div className='juego-name'>Resident Evil Village</div>
                                <div className='juego-price'>$ 39</div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductoInfo