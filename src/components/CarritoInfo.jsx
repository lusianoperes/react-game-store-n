import { useState, useEffect } from 'react';
import './CarritoInfo.css';
import { MyContext } from '../Contexto';
import { useContext } from 'react';
import gamesData from '../games-data.json';

function CarritoInfo() {

    const [price, setPrice] = useState(0);
    const [games, setGames] = useState([]);
    const { UserId, setUserId } = useContext(MyContext);
    const { UsersData, setUsersData } = useContext(MyContext);
    const user = UsersData.find((user) => user.userId === UserId);

    const ChargeGamesOnCart = () => {

        let juegos_de_carrito = [];

        for (let i = 0; i < user.on_cart_games_id.length; i++) {

            let id_deljuego = user.on_cart_games_id[i].game_id;
            let juegoBuscado = gamesData.find(function (juego) {
                return juego.id === id_deljuego;
            });

            juegos_de_carrito.push(
                {
                    id: juegoBuscado.id,
                    name: juegoBuscado.name,
                    description: juegoBuscado.description,
                    image: juegoBuscado.image,
                    gamePrice: juegoBuscado.gamePrice,
                    quantity: user.on_cart_games_id[i].quantity,
                }
            )
        }
        setGames(juegos_de_carrito);
    };

    const calculateTotalPrice = () => {
        const totalPrice = games.reduce(
            (total, game) => total + game.gamePrice * game.quantity,
            0
        );
        setPrice(totalPrice);
    };

    const handleDeleteGame = (id) => {
        const updatedGames = games.filter((game) => game.id !== id);
        let datosususaux = UsersData;
        const user = UsersData.find((user) => user.userId === UserId);

        if (user) {
           
            const gameIndex = user.on_cart_games_id.findIndex(
                (game) => game.game_id === id
            );

            if (gameIndex !== -1) {

                user.on_cart_games_id.splice(gameIndex, 1);
                setUsersData([...UsersData]);
            }
        }
        setGames(updatedGames);

    };

    const ComprarJuegos = () => {
        setGames([]);
        const updatedUsersData = UsersData.map((user) => {
            if (user.userId === UserId) {
              return {
                ...user,
                on_cart_games_id: [],
              };
            }
            return user;
          });
        
          setUsersData(updatedUsersData);
          alert("Su compra ha sido realizada con éxito");
        
    };

    useEffect(() => {
        ChargeGamesOnCart();
    }, []);

    useEffect(() => {
        calculateTotalPrice();
    }, [games]);


    return (
        <>
            <div className='carrito-container'>
                <div className='texto-carrito'>Carrito de compras</div>
                <div className='bloque-carrito'>
                    <div className='juegos-carrito'>
                        {games.length === 0 ? <div className='noelements-container'><img src="src/Images/noelements.png" alt="noelements" /><div className='texto-noelementos'>No hay elementos.</div></div> :
                            games.map((game) => (
                                <div className="juego" key={game.id}>
                                    <img src={game.image} alt={game.name} />
                                    <div className="info-juego">
                                        <div className="texto-juego">
                                            <div className="nombre-juego">{game.name}</div>
                                            <div className="descripcion-juego">{game.description}</div>
                                        </div>
                                        <div className="interaccion">
                                            <div className="glowbox">{game.quantity}</div>
                                            <div className="precio-juego">$ {game.gamePrice}</div>
                                            <button className="delete-button" onClick={() => handleDeleteGame(game.id)}>
                                                X
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div className='caja-compra'>
                        <div className='caja-total'>TOTAL</div>
                        <div className='caja-precio'>{price}</div>
                        <button className={price !== 0 ? 'boton-comprar' : 'boton-comprar-cero'} onClick={() => ComprarJuegos()}>COMPRAR</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarritoInfo