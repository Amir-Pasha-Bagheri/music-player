import React from 'react'
import { useRoutes, matchRoutes, useLocation, Navigate } from 'react-router-dom'
import Suspensor from './Suspensor'
import PageConfigs from '../components/PageConfigs'
import globalStorage from '../configs/globalStorage'

function Layout() {
  const { pathname } = useLocation()
  const matchRoute = matchRoutes(PageConfigs, pathname)
  const route = matchRoute?.[0] || null
  const {
    route: { options },
  } = route

  const authenticated = globalStorage.getItem('authenticated')

  if (pathname === '/' && authenticated)
    return <Navigate to='/landing' replace />

  if (pathname !== '/' && !authenticated) return <Navigate to='/' replace />

  return (
    <Suspensor>
      {options?.layout !== false && <div>welcome here.</div>}

      {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useRoutes(PageConfigs)
      }
    </Suspensor>
  )
}

export default Layout
