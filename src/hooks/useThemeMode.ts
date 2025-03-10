import { useContext } from 'react'
import ThemeModeContext from '../components/context/ThemeProvider'

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
