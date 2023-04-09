import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './app/layout'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import defaultTheme from './app/configs/theme'
import './app/styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
