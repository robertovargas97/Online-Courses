import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'

import { ReactNode } from 'react'
import purpleTheme from './purpleTheme'

interface AppThemeProps {
  children: ReactNode
}

export const AppTheme: React.FC<AppThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
