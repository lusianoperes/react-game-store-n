import { useState } from 'react'
import { Link } from 'react-router-dom';
import './ProductsFilter.css'
import gamesData from '../games-data.json'

function ProductsFilter() {

    const [orderBy, setOrderBy] = useState("");
    const games = gamesData;

    const handleOrderChange = (event) => {
        setOrderBy(event.target.value);
    };

    const filteredGames = games.slice().sort((a, b) => {
        if (orderBy === "caros") {
            return b.gamePrice - a.gamePrice;
        } else if (orderBy === "baratos") {
            return a.gamePrice - b.gamePrice;
        } else if (orderBy === "nuevos") {
            let fechaA = new Date(a.releaseDate);
            let fechaB = new Date(b.releaseDate);
            console.log(fechaA + fechaB)
            return fechaB - fechaA;
        } else if (orderBy === "antiguos") {
            let fechaA = new Date(a.releaseDate);
            let fechaB = new Date(b.releaseDate);
            return fechaA - fechaB;
        }
        else {
            return 0;
        }
    });

    return (
        <>
            <div className='main'>
                <div className='top-box'>
                    <div className='products-text'>Productos</div>
                    <div className='filter-bar'>
                        <select className='order-button' value={orderBy} onChange={handleOrderChange}>
                            <option value="" disabled selected>Ordenar</option>
                            <option value="caros">Más caros</option>
                            <option value="baratos">Mas baratos</option>
                            <option value="nuevos">Mas nuevos</option>
                            <option value="antiguos">Mas antiguos</option>
                        </select>
                        <input className="search-bar" id="search" type="search" placeholder="Buscar" aria-label="Search"></input>
                        <button className='search-button'><img className='lupa-image' src="src/Images/lupa.png" alt='lupa' /></button>
                    </div>
                </div>
                <div className='products-container'>
                    {filteredGames.map(game => (
                        <Link to={`/Producto/${game.id}`} key={game.id}>
                            <div class="product">
                                <img src={game.image} alt={game.name} />
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