//import { useState } from 'react'
import { Link } from 'react-router-dom';
import './TopSellers.css'
import gamesData from '../games-data.json'
import Producto from '../pages/Producto';

function TopSellers() {
    //const [count, setCount] = useState(0)
    const getTopSalesGames = () => {
        const sortedData = [...gamesData]; // Copia del arreglo original
        sortedData.sort((a, b) => b.sales - a.sales); // Ordena en función del campo de ventas

        return sortedData.slice(0, 4); // Devuelve los primeros 4 elementos ordenados
    };
    console.log(gamesData)
    const topSalesGames = getTopSalesGames(); // Obtiene los 4 juegos con mayores ventas


    return (
        <>
            <div className='topsellers-container'>
                <div className='texto_topsellers'>Más Vendidos</div>
                <div className='container-juegos-topsellers'>
                    {topSalesGames.map(game => (
                        <Link to={`/Producto/${game.id}`} key={game.id}>
                            <div className='gamebox' >
                                <img src={game.image} alt={game.name} />
                                <div className="gamebox_text">
                                    <div className='gamebox_name'>{game.name}</div>
                                    <div className="gamebox_price">${game.gamePrice}</div>
                                </div>
                            </div>
                        </Link>
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export default TopSellers