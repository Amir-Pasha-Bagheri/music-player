import { lazy } from 'react'

const Starter = lazy(() => import('./Starter'))
const Landing = lazy(() => import('./Landing'))

const PageConfigs = [
  {
    path: '/',
    options: {
      layout: false,
    },
    element: <Starter />,
  },
  {
    path: '/landing',
    element: <Landing />,
  },
]

export default PageConfigs
