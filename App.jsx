import Header from './Components/header'

import './App.css'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import {  ThemeProvider } from './Contexts/ThemeContext'

const App = () => {

  return (

        <ThemeProvider>
          <Header />
          <Outlet />
        </ThemeProvider>
        
  )
}

export default App

