import { Navigate, Route, Routes } from 'react-router-dom'

import About from './pages/about'
import Contact from './pages/contact'
import Client from './pages/client'
import Home from './pages/home'
import Login from './pages/login'
import SignUp from './pages/signUp'
import NotFound from './pages/notFound'
import Scheduling from './pages/scheduling'
import Technologies from './pages/technologies'
import { useAuth } from './contexts/AuthContext'

const PATH = 'Infinity' // vite.config.ts

const MyRoutes = () => {
  const Private = ({ children }) => {
    const { user } = useAuth()

    if (!user.authenticated) {
      return <Navigate to={'/' + PATH + '/login'} />
    }

    return <>{children}</>
  }

  return (
    <Routes>
      <Route path={PATH + '/'} element={<Home />} />
      <Route path={PATH + '/about'} element={<About />} />
      <Route path={PATH + '/contact'} element={<Contact />} />
      <Route path={PATH + '/technologies'} element={<Technologies />} />
      <Route
        path={PATH + '/scheduling'}
        element={
          <Private>
            <Scheduling />
          </Private>
        }
      />
      <Route path={PATH + '/login'} element={<Login />} />
      <Route path={PATH + '/signUp'} element={<SignUp />} />
      <Route path={PATH + '/client'} element={<Client />} />
      <Route path={PATH + '/*'} element={<NotFound />} />
    </Routes>
  )
}

export default MyRoutes
