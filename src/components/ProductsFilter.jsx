//import { useState } from 'react'
import { Link } from 'react-router-dom';
import './ProductsFilter.css'
import gamesData from '../games-data.json'

function ProductsFilter() {
    //const [count, setCount] = useState(0)
    const games = gamesData;
    return (
        <>
            <div className='main'>
                <div className='top-box'>
                    <div className='products-text'>Productos</div>
                    <div className='filter-bar'>
                        <select className='order-button'>
                            <option value="" disabled selected>Ordenar</option>
                            <option value="opcion1">Más caros</option>
                            <option value="opcion2">Mas baratos</option>
                            <option value="opcion3">Mas nuevos</option>
                            <option value="opcion3">Mas antiguos</option>
                        </select>
                        <input className="search-bar" id="search" type="search" placeholder="Buscar" aria-label="Search"></input>
                        <button className='search-button'><img className='lupa-image' src="src/Images/lupa.png" alt='lupa' /></button>
                    </div>
                </div>
                <div className='products-container'>
                    {games.map(game => (
                        <Link to={`/Producto/${game.id}`} key={game.id}>
                            <div class="product">
                                <img src={game.image} alt={game.name}/>
                                <div class="product_text">
                                    <div class="product_name">{game.name}</div>
                                    <div class="product_price">$ {game.gamePrice}</div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductsFilter