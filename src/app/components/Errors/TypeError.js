import React from 'react'
import Box from '@mui/material/Box'
import MusicOffIcon from '@mui/icons-material/MusicOff'
import { Button, Typography, styled } from '@mui/material'
import { motion } from 'framer-motion'

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  userSelect: 'none',
}))

const titleStyle = (theme) => ({
  marginBottom: 2,
  [theme.breakpoints.down('sm')]: {
    fontSize: 30,
  },
})

const textStyle = (theme) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: 25,
  },
  [theme.breakpoints.down('md')]: {
    paddingX: 5,
  },
})

function TypeError() {
  function tryAgain() {
    window.location.reload()
  }

  return (
    <StyledBox>
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
        style={{ textAlign: 'center' }}
      >
        <MusicOffIcon
          sx={(theme) => ({
            color: theme.palette.info.main,
            fontSize: 120,
            marginBottom: 4,
          })}
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        >
          <Typography variant='h3' color='grey' sx={titleStyle}>
            Oops !
          </Typography>
          <Typography variant='h4' color='gray' sx={textStyle}>
            Something went wrong ! Please try again later.
          </Typography>
          <Button
            variant='contained'
            color='info'
            size='large'
            sx={{ marginTop: 5 }}
            onClick={tryAgain}
          >
            Try again
          </Button>
        </motion.div>
      </motion.div>
    </StyledBox>
  )
}

export default TypeError
