import { createContext, useContext } from 'react'
import usePersistedState from '../utils/usePersistedState'

const initialValue = {
  isOpen: false,
  setIsOpen: () => {},
}

const NavbarContext = createContext(initialValue)

export const useNavbar = () => useContext(NavbarContext)

export const NavbarContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = usePersistedState('isOpen', initialValue.isOpen)

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavbarContext.Provider>
  )
}
