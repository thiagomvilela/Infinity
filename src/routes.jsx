import { Route, Routes } from 'react-router-dom'

import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default MyRoutes
