import { useState } from 'react'
import { Link } from 'react-router-dom';
import './ProductsFilter.css'
import gamesData from '../games-data.json'

function ProductsFilter() {

    const [orderBy, setOrderBy] = useState("");
    const [searchData, setSearchData] = useState('');
    const games = gamesData;

    const handleOrderChange = (event) => {
        setOrderBy(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchData(event.target.value);
    };

    const filteredGames = games
        .filter((game) =>
            game.name.toLowerCase().includes(searchData.toLowerCase())
        )
        .sort((a, b) => {
            if (orderBy === 'caros') {
                return b.gamePrice - a.gamePrice;
            } else if (orderBy === 'baratos') {
                return a.gamePrice - b.gamePrice;
            } else if (orderBy === 'nuevos') {
                return new Date(b.releaseDate) - new Date(a.releaseDate);
            } else if (orderBy === 'antiguos') {
                return new Date(a.releaseDate) - new Date(b.releaseDate);
            } else {
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
                        <input className="search-bar" id="search" type="search" placeholder="Buscar" aria-label="Search" value={searchData}
              onChange={handleSearchChange}></input>
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