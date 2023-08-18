//import { useState } from 'react'
import '../reset.css'
import './BalanceInfo.css'

function BalanceInfo() {
    //const [count, setCount] = useState(0)
  
    return (
      <>
        <div className='main'>
            <div className='ventas-text'>Ventas del día</div>
            <div className='cuadros-ventas'>
                <div className='cuadro'>1 cliente</div>
                <div className='cuadro'>2 ventas</div>
                <div className='cuadro'>2 juegos</div>
                <div className='cuadro'>$ 83</div>
            </div>
            <div className='ventas-container'>
                <div className='datos-venta'>
                    <div className='fecha-venta'>Fecha: 11/7/2023 15:40:59</div>
                    <div className='tabla-venta'>
                    <table className='tablaventa'>
                        <tr>
                            <td>Juego</td>
                            <td>Precio</td>
                            <td>Cantidad</td>
                        </tr>
                        <tr>
                            <td>The Quarry</td>
                            <td>69</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>TOTAL</td>
                            <td>69</td>
                        </tr>
                    </table>
                    </div>
                </div>
                <div className='datos-venta'>
                    <div className='fecha-venta'>Fecha: 11/7/2023 15:40:59</div>
                    <div className='tabla-venta'>
                    <table className='tablaventa'>
                        <tr>
                            <td>Juego</td>
                            <td>Precio</td>
                            <td>Cantidad</td>
                        </tr>
                        <tr>
                            <td>Grim Fandango</td>
                            <td>14</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>TOTAL</td>
                            <td>14</td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>

        </div>
      </>
    )
  }
  
  export default BalanceInfo