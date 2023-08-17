//import { useState } from 'react'
import { Link } from 'react-router-dom';
import './ProductoInfo.css'
import gamesData from '../games-data.json'
import { useParams } from 'react-router-dom';
import fifa from '../Images/fifa23.png'

function ProductoInfo() {
    //const [count, setCount] = useState(0)
    const params = useParams();
    const id = parseInt(params['*']);
    const product_game = gamesData.find(game => game.id === id);
    const other_products = gamesData.filter(game => game.id !== id);
    const related_products = other_products.sort(function (a, b) { return Math.random() - 0.5; }).slice(0, 4); //depende del resultado de mathrandom - 0.5 intercambia el orden de dos elementos entre sí

    console.log(product_game.image);

    return (
        <>
            <div className='productinfo-container'>
                <div className='producto-grande'>
                    <div className='product-price'>${product_game.gamePrice}</div>
                    <img src={product_game.image} alt={product_game.name} />
                    <div className='info-producto'>
                        <div className='product-name'>{product_game.name}</div>
                        <div className='product-description'>{product_game.description}</div>
                        <div className='product-bottombar'>
                            <div className='product-developer'>{product_game.developer}</div>
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
                        {related_products.map(game => (
                            <Link to={`/Producto/${game.id}`} key={game.id}>
                                <div className='caja-juego' key={game.id}>
                                    <img src={game.image} alt={game.name} />
                                    <div className='caja-juego-text'>
                                        <div className='juego-name'>{game.name}</div>
                                        <div className='juego-price'>$ {game.gamePrice}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductoInfo