import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Layout/Header/Navbar'
import ItemListContainer from './components/Layout/Header/components/ItemListContainer'
import banner from './img/banner.jpeg'

import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'

function App() {

  return (
    <Router>
      <div>
      <Navbar />
      <ItemListContainer
          banner={banner}
      />
  
      <Routes>
        <Route path='/' element={<HomePage />}> </Route>
        <Route path='/detail/:id' element={<DetailPage />}> </Route>
      </Routes>
      </div>
    </Router>
  )
}

export default App
