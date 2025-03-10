import React, { createContext, useState } from 'react'

type ThemeContextType = {
  themeMode: 'light' | 'dark'
  setThemeMode: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
}

const ThemeModeContext = createContext<ThemeContextType | undefined>(undefined)

type TTheme = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: TTheme) => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  )
}

export default ThemeModeContext
