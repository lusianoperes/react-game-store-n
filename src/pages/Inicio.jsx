import Header from '../components/Header'
import Slider from '../components/Slider'
import TopSellers from '../components/TopSellers'
import Footer from '../components/Footer'


function Inicio() {
    //const [count, setCount] = useState(0)
  
    return (
      <div className='container-app'>  
          <Header/>
          <Slider/>
          <TopSellers/>
          <Footer/>
      </div>
    )
  }
  
  export default Inicio