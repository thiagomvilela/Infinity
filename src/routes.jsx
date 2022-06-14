import { Route, Routes } from 'react-router-dom'

import Contact from './pages/contact'
import Home from './pages/home'

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default MyRoutes
