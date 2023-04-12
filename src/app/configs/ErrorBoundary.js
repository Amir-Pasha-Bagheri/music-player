import React from 'react'
import TypeError from '../components/Errors/TypeError'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, info) {}

  render() {
    if (this.state.hasError) return <TypeError />

    return this.props.children
  }
}

export default ErrorBoundary
