import Header from '../components/Header'
import Footer from '../components/Footer'
import CarritoInfo from '../components/CarritoInfo'


function Carrito() {
    //const [count, setCount] = useState(0)
  
    return (
      <div className='container-app'>  
          <Header/>
          <CarritoInfo/>
          <Footer/>
      </div>
    )
  }
  
  export default Carrito