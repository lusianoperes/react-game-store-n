//import { useState } from 'react'
import './ProductsFilter.css'

function ProductsFilter() {
    //const [count, setCount] = useState(0)
  
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
                        <button className='search-button'><img className='lupa-image' src="src/Images/lupa.png" alt='lupa'/></button>
                    </div>
            </div>
            <div className='products-container'>


                            <div class="product">
                            <img src="src/Images/Rocket_League.png"/>
                            <div class="product_text">
                            <div class="product_name">Rocket League</div>
                            <div class="product_price">$ 70</div>
                            </div>
                        </div>

                        <a class="product" href="producto.html">
                            <img src="src/Images/modern_warfare_2.png"/>
                            <div class="product_text">
                            <div class="product_name">Modern Warfare II</div>
                            <div class="product_price"> $69</div>
                            </div>
                        </a>

                        <div class="product">
                            <img src="src/Images/the_quarry.png"/>
                            <div class="product_text">
                            <div class="product_name">The Quarry</div>
                            <div class="product_price"> $69</div>
                            </div>
                        </div>

                        <div class="product">
                            <img src="src/Images/gotham_knights.jpeg"/>
                            <div class="product_text">
                            <div class="product_name">Gotham Knights</div>
                            <div class="product_price">$ 69</div>
                            </div>
                        </div>

                        <div class="product">
                            <img src="src/Images/gow_ragnarok.jpeg"/>
                            <div class="product_text">
                            <div class="product_name">God Of War Ragnarok</div>
                            <div class="product_price">$ 60</div>
                            </div>
                        </div>

                        <div class="product">
                            <img src="src/Images/fifa23.png"/>
                            <div class="product_text">
                            <div class="product_name">FIFA 23</div>
                            <div class="product_price">$ 59</div>
                            </div>
                        </div>

                        <div class="product">
                            <img src="src/Images/Resident-Evil-Village-Gold-Edition.png"/>
                            <div class="product_text">
                            <div class="product_name">Resident Evil Village</div>
                            <div class="product_price">$ 39</div>
                            </div>
                        </div>

                        <div class="product">
                            <img src="src/Images/hitman_III.jpeg"/>
                            <div class="product_text">
                            <div class="product_name">HITMAN III</div>
                            <div class="product_price">$ 20</div>
                            </div>
                        </div>

                        <div class="product">
                            <img src="src/Images/grim_fandango.jpeg"/>
                            <div class="product_text">
                            <div class="product_name">Grim Fandango</div>
                            <div class="product_price">$ 14</div>
                            </div>
                        </div>

                        <div class="product">
                            <img src="src/Images/the_witcher_3.jpeg"/>
                            <div class="product_text">
                            <div class="product_name">The Witcher 3</div>
                            <div class="product_price">$ 39</div>
                            </div>
                        </div>
                </div>
        </div>
      </>
    )
  }
  
  export default ProductsFilter