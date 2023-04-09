import { lazy } from 'react'

const Starter = lazy(() => import('./Starter'))
const Home = lazy(() => import('./Home'))

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
    element: <Home />,
  },
]

export default PageConfigs
