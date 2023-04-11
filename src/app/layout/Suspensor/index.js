import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import Loading from './Loading'

function Suspensor({ children }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}

Suspensor.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Suspensor
