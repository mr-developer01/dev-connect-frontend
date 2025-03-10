import { ThemeProvider, CssBaseline } from '@mui/material'
import { getTheme } from './theme/appTheme'
// import Demo from './components/Demo'
import { useThemeMode } from './hooks/useThemeMode'
import AppRoute from './components/router/AppRoute'
import { BrowserRouter } from 'react-router'

export default function App() {
  const { themeMode } = useThemeMode()

  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
      {/* <Demo /> */}
    </ThemeProvider>
  )
}
