import Header from '../components/Header'
import Footer from '../components/Footer'
import BalanceInfo from '../components/BalanceInfo'

function Balances() {
    //const [count, setCount] = useState(0)
  
    return (
      <div className='container-app'>  
          <Header/>
          <BalanceInfo/>
          <Footer/>
      </div>
    )
  }
  
  export default Balances