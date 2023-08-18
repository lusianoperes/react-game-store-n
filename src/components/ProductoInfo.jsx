//import { useState } from 'react'
import { Link } from 'react-router-dom';
import '../reset.css'
import './ProductoInfo.css'
import gamesData from '../games-data.json'
import { useParams } from 'react-router-dom';
import { MyContext } from '../Contexto'
import { useContext } from 'react'
import usersData from '../users-data.json'


function ProductoInfo() {
    //const [count, setCount] = useState(0)
    const params = useParams();
    const id = parseInt(params['*']);
    const product_game = gamesData.find(game => game.id === id);
    const other_products = gamesData.filter(game => game.id !== id);
    const related_products = other_products.sort(function (a, b) { return Math.random() - 0.5; }).slice(0, 4); //depende del resultado de mathrandom - 0.5 intercambia el orden de dos elementos entre sí

    console.log("El src de la imagen es: " + product_game.image);

    const { UserId, setUserId } = useContext(MyContext);
    const { UsersData, setUsersData } = useContext(MyContext);
    const user = usersData.find((user) => user.userId === UserId);


    const AñadirJuegoAlCarrito = (id_del_juego) => {

        let datosusu = UsersData;
        const usuario = datosusu.find(usuario => usuario.userId === UserId);

        if (usuario) {
            const game = usuario.on_cart_games_id.find(game => game.game_id === id_del_juego);

            if (game) {

                game.quantity += 1;
            } else {

                const newGame = {
                    game_id: id_del_juego,
                    quantity: 1
                };
                usuario.on_cart_games_id.push(newGame);
            }
        }

        setUsersData(datosusu);
        console.log(UsersData);
        alert("Has añadido el juego al carrito");

    };
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
                            <button className='cart-button' onClick={() => AñadirJuegoAlCarrito(product_game.id)}>
                                <div className='plus-sign'>+</div>
                                <img src="/src/Images/carritoverde.png" alt="carritoverde" />
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