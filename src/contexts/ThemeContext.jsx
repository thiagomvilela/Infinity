import { createContext, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import light from '../styles/theme/light'
import usePersistedState from '../utils/usePersistedState'

const initialValue = {
  theme: light,
  setTheme: () => { }
}

const ThemeContext = createContext(initialValue)

export const useTheme = () => useContext(ThemeContext)

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = usePersistedState('theme', initialValue.theme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
