import { Route, Routes } from 'react-router-dom'

import About from './pages/about'
import Contact from './pages/contact'
import Customers from './pages/customers'
import Home from './pages/home'
import Form from './pages/form'
import Methodology from './pages/methodology'
import Scheduling from './pages/scheduling'
import Technologies from './pages/technologies'

const MyRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/technologies' element={<Technologies />} />
      <Route path='/scheduling' element={<Scheduling />} />
      <Route path='/methodology' element={<Methodology />} />
      <Route path='/form' element={<Form />} />
      <Route path='/customers' element={<Customers />} />
    </Routes>
  )
}

export default MyRoutes
