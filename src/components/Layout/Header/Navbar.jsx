import banner from '../../../img/banner_nietitos.jpg'
import logo from '../../../img/logo.png'

//Importacion de componentes
import Searcher from './components/Searcher'
import Menu from './components/Menu'
import CartWidget from './components/CartWidget'

const Navbar = () => {
  return (
    <div>
      <div className='w-100 bg-celeste '>
        <p className='text-lg text-center text-white'>10% off en tu primer pedido</p>
      </div>

      <div className='w-100 my-4 px-4'>
        <ul className='flex items-center justify-around'>
          <li><img src={logo} alt="logoDGG" className='w-20'/></li>
          <li> <Menu /> </li>
          <li className='relative right-36'> <Searcher /> </li>
          <li> <CartWidget /> </li>
        </ul>
      </div>

      <img src={banner} alt="" className=''/>



    </div>
  )
}

export default Navbar
