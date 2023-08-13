import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductoInfo from '../components/PoductoInfo'



function Producto() {
    //const [count, setCount] = useState(0)
  
    return (
      <div className='container-app'>  
        <Header/>
        <ProductoInfo/>
        <Footer/>
      </div>
    )
  }
  
  export default Producto