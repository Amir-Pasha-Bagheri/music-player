import React from 'react'
import PropTypes from 'prop-types'

function Authentication(WrappedComponent) {
  //   if (authentication) return WrappedComponent
  //   return <Navigate to='/' replace />

  return <WrappedComponent />
}

Authentication.propTypes = {
  WrappedComponent: PropTypes.node.isRequired,
}

export default Authentication
