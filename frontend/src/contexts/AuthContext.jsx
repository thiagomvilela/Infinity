import { createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginSession } from '../services/api'
import usePersistedState from '../utils/usePersistedState'

const initialValue = {
  user: {
    authenticated: false,
    id: '',
    email: '',
    name: '',
  },
  login: (email, password) => {},
  logout: () => {},
}

const AuthContext = createContext(initialValue)

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = usePersistedState('user', initialValue.user)
  const PATH = '/Infinity'
  const navigate = useNavigate()

  const login = async (email, password) => {
    const response = await loginSession(email, password)

    if (response != null) {
      const data = response.data

      setUser({
        authenticated: true,
        id: data.id,
        email: data.email,
        name: data.name,
      })
      navigate(PATH + '/scheduling')
    }
  }

  const logout = () => {
    setUser({ authenticated: false, id: '', email: '', name: '' })
    navigate(PATH + '/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
