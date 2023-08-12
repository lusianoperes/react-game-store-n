import { useState, useEffect } from 'react'
import './CarritoInfo.css'

function CarritoInfo() {

    const [price, setPrice] = useState(0)
    const [games, setGames] = useState([
        {
            id: 1,
            image: 'src/Images/Rocket_League.png',
            name: 'Rocket League',
            description: '¡Descarga y compite en este r...',
            quantity: 1,
            gamePrice: 70,
        },
        {
            id: 2,
            image: 'src/Images/the_quarry.png',
            name: 'The Quarry',
            description: 'Perseguidos por lugares ens...',
            quantity: 1,
            gamePrice: 69,
        },
    ]);

    const calculateTotalPrice = () => {
        const totalPrice = games.reduce((total, game) => total + game.gamePrice * game.quantity, 0);
        setPrice(totalPrice);
    };

    const handleDeleteGame = (id) => {
        const updatedGames = games.filter((game) => game.id !== id);
        setGames(updatedGames);
    };

    useEffect(() => {
        calculateTotalPrice();
      }, [games]);

    return (
        <>
            <div className='carrito-container'>
                <div className='texto-carrito'>Carrito de compras</div>
                <div className='bloque-carrito'>
                    <div className='juegos-carrito'>
                        {games.length === 0 ? <div className='noelements-container'><img src="src/Images/noelements.png" alt="noelements"/><div className='texto-noelementos'>No hay elementos.</div></div> :
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
                        <button className={price !== 0 ? 'boton-comprar' : 'boton-comprar-cero'}>COMPRAR</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarritoInfo