//import { useState } from 'react'
import './TopSellers.css'

function TopSellers() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <div className='topsellers-container'>
                <div className='texto_topsellers'>Más Vendidos</div>
                <div className='container-juegos-topsellers'>
                    <div className='gamebox'>
                        <img src="src\Images\Resident-Evil-Village-Gold-Edition.png" alt='ResidentEvilVillage'/>
                        <div className="gamebox_text">
                            <div className='gamebox_name'>Resident Evil Village</div>
                            <div className="gamebox_price">$39</div>
                        </div>    
                    </div>
                    <div className='gamebox'>
                        <img src="src\Images\gotham_knights.jpeg" alt='GothamKnights'/>
                        <div className="gamebox_text">
                            <div className='gamebox_name'>Gotham Knights</div>
                            <div className="gamebox_price">$69</div>
                        </div>    
                    </div>
                    <div className='gamebox'>
                        <img src="src\Images\fifa23.png" alt='Fifa23'/>
                        <div className="gamebox_text">
                            <div className='gamebox_name'>Fifa 23</div>
                            <div className="gamebox_price">$59</div>
                        </div>    
                    </div>
                    <div className='gamebox'>
                        <img src="src\Images\hitman_III.jpeg" alt='HitmanIII'/>
                        <div className="gamebox_text">
                            <div className='gamebox_name'>HITMAN III</div>
                            <div className="gamebox_price">$29</div>
                        </div>    
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default TopSellers