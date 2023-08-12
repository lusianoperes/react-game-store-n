//import { useState } from 'react'
import './CarritoInfo.css'

function CarritoInfo() {
    //const [count, setCount] = useState(0)
  
    return (
      <>
        <div className='carrito-container'>
            <div className='texto-carrito'>Carrito de compras</div>
            <div className='bloque-carrito'>
                <div className='juegos-carrito'>
                    <div className='juego'>
                        <img src="src/Images/Rocket_League.png" alt="RocketLeague" />
                        <div className='info-juego'>
                            <div className='texto-juego'>
                                <div className='nombre-juego'>Rocket League</div>
                                <div className='descripcion-juego'>¡Descarga y compite en este r...</div>
                            </div>
                            <div className='interaccion'>
                                <div className='glowbox'>1</div>
                                <div className='precio-juego'>$ 70</div>
                                <button className='delete-button'>X</button>
                            </div>
                        </div>
                    </div>
                    <div className='juego'>
                        <img src="src/Images/the_quarry.png" alt="RocketLeague" />
                        <div className='info-juego'>
                            <div className='texto-juego'>
                                <div className='nombre-juego'>The Quarry</div>
                                <div className='descripcion-juego'>Perseguidos por lugares ens...</div>
                            </div>
                            <div className='interaccion'>
                                <div className='glowbox'>1</div>
                                <div className='precio-juego'>$ 69</div>
                                <button className='delete-button'>X</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='caja-compra'>
                    <div className='caja-total'>TOTAL</div>
                    <div className='caja-precio'>139</div>
                    <div className='boton-comprar'>COMPRAR</div>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default CarritoInfo