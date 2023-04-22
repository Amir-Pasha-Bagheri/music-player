import React from 'react'
import { useRoutes, matchRoutes, useLocation } from 'react-router-dom'
import Suspensor from './Suspensor'
import PageConfigs from '../components/PageConfigs'
import Authentication from './Authentication'

function Layout() {
  const { pathname } = useLocation()
  const matchRoute = matchRoutes(PageConfigs, pathname)
  const route = matchRoute?.[0] || null
  const {
    route: { options },
  } = route

  return (
    <Suspensor>
      {options?.layout !== false && <div>welcome here.</div>}

      {useRoutes(PageConfigs)}
    </Suspensor>
  )
}

export default Authentication(Layout)
