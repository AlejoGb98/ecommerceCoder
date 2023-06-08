import { Link } from 'react-router-dom'
import logo from '../../../img/logo.png'

//Importacion de componentes
import Searcher from './components/Searcher'
import Menu from './components/Menu'
import CartWidget from './components/CartWidget'


const Navbar = () => {
  return (
    <div>
      <div className='w-100 bg-naranja '>
        <p className='text-lg text-center text-white'>10% off en tu primer pedido</p>
      </div>

      <div className='w-100 my-4 px-4'>
        <ul className='flex items-center justify-around'>
          <li>
            <Link to='/'><img src={logo} alt="logoDGG" className='w-20'/></Link>
          </li>
          <li> <Menu /> </li>
          <li className='relative right-36'> <Searcher /> </li>
          <li> <CartWidget /> </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
