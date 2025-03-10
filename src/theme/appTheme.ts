import { createTheme, ThemeOptions } from '@mui/material/styles'

// Extend the breakpoints type
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    sm: true
    md: true
    lg: true
    xl: true
    xxl: true // Add xxl to Breakpoints
  }
}

// Create theme function
export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#1976d2' : '#90caf9',
      },
      secondary: {
        main: mode === 'light' ? '#ff4081' : '#f48fb1',
      },
      background: {
        default: mode === 'light' ? '#f5f5f5' : '#121212',
        paper: mode === 'light' ? '#fff' : '#1e1e1e',
      },
      text: {
        primary: mode === 'light' ? '#000' : '#fff',
        secondary: mode === 'light' ? '#666' : '#bbb',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 480, // Small screens
        md: 768, // Tablets
        lg: 1024, // Laptops
        xl: 1280, // Large screens
        xxl: 1536, // Extra large screens (custom)
      },
    },
    typography: {
      fontFamily: "'Inter', sans-serif",
      h1: {
        fontSize: '1.5rem',
        fontWeight: 700,
        '@media (min-width: 480px)': { fontSize: '1.75rem' },
        '@media (min-width: 768px)': { fontSize: '2rem' },
        '@media (min-width: 1024px)': { fontSize: '2.5rem' },
        '@media (min-width: 1280px)': { fontSize: '3rem' },
        '@media (min-width: 1536px)': { fontSize: '3.5rem' }, // xxl
      },
    },
  } as ThemeOptions)
