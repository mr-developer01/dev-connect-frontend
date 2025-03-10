// _app.tsx
import { useState } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { getTheme } from './theme/appTheme' // Import custom theme
import Demo from './components/Demo'

export default function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
      <Demo toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}
