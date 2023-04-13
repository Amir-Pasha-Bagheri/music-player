import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './app/layout'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import defaultTheme from './app/configs/theme'
import { Provider as StoreProvider } from 'react-redux'
import store from './app/store/store'
import ErrorBoundary from './app/configs/ErrorBoundary'
import './app/styles/index.css'
import 'simplebar-react/dist/simplebar.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <ErrorBoundary>
        <StoreProvider store={store}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </StoreProvider>
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
)
