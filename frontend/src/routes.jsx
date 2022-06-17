import { Route, Routes } from 'react-router-dom'

import About from './pages/about'
import Contact from './pages/contact'
import Client from './pages/client'
import Home from './pages/home'
import Form from './pages/form'
import Login from './pages/login'
import NotFound from './pages/notFound'
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
      <Route path='/login' element={<Login />} />
      <Route path='/methodology' element={<Methodology />} />
      <Route path='/form' element={<Form />} />
      <Route path='/client' element={<Client />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}

export default MyRoutes
