import Header from '../components/Header'
import Footer from '../components/Footer'
import NotFoundContent from '../components/NotFoundContent'



function NotFound() {
    //const [count, setCount] = useState(0)
  
    return (
      <div className='container-app'>  
        <Header/>
        <NotFoundContent/>
        <Footer/>
      </div>
    )
  }
  
  export default NotFound