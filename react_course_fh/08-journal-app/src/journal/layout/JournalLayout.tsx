import { Box, Toolbar } from '@mui/material'
import React, { ReactNode } from 'react'
import { Navbar, Sidebar } from '../components'

interface JournalLayoutProps {
  children: ReactNode
}

const drawerWidth = 280

export const JournalLayout: React.FC<JournalLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar drawerWidth={drawerWidth}></Navbar>

      <Sidebar drawerWidth={drawerWidth}></Sidebar>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
