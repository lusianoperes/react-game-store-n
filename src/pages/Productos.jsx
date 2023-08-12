import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductsFilter from '../components/ProductsFilter'


function Productos() {
    //const [count, setCount] = useState(0)
  
    return (
      <div className='container-app'>  
          <Header/>
          <ProductsFilter/>
          <Footer/>
      </div>
    )
  }
  
  export default Productos