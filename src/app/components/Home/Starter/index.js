import React from 'react'
import PropTypes from 'prop-types'
import { Box, styled } from '@mui/material'

const StyledBox = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
}))

function Starter(props) {
  return <StyledBox>hi</StyledBox>
}

Starter.propTypes = {}

export default Starter
