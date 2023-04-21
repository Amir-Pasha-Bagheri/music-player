import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './app/layout'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import defaultTheme from './app/configs/theme'
import { Provider as StoreProvider } from 'react-redux'
import store from './app/store/store'
import ErrorBoundary from './app/configs/ErrorBoundary'
import { ToastContainer } from 'react-toastify'
import './app/styles/index.css'
import 'simplebar-react/dist/simplebar.min.css'
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <ErrorBoundary>
        <StoreProvider store={store}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>

          <ToastContainer
            position='top-center'
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            limit={3}
            theme='colored'
          />
        </StoreProvider>
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
)
