import { lazy } from 'react'

const Home = lazy(() => import('./Home/index'))

const PageConfigs = [
  {
    path: '/',
    options: {
      layout: false,
    },
    element: <Home />,
  },
]

export default PageConfigs
