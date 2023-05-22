
import Navbar from './components/Layout/Header/Navbar'
import ItemListContainer from './components/Layout/Header/components/ItemListContainer'

import banner from './img/banner_nietitos.jpg'

function App() {

  return (
    <div>
     <Navbar />

     <ItemListContainer
        banner={banner}
     />

    </div>
  )
}

export default App
