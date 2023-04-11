import React from 'react'
import { LinearProgress, Typography, styled } from '@mui/material'
import Box from '@mui/material/Box'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import HeadsetIcon from '@mui/icons-material/Headset'
import SpeakerIcon from '@mui/icons-material/Speaker'
import { motion } from 'framer-motion'

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  userSelect: 'none',
}))

const iconsStyle = (theme) => ({
  color: theme.palette.grey[50],
  fontSize: 40,
  marginX: 4,
})

const initial = { scale: 0 }
const animate = { scale: [0, 1, 0] }
const transition = { repeat: 'infinity', duration: 1, repeatDelay: 1 }

function Loading() {
  return (
    <StyledBox>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <motion.div initial={initial} animate={animate} transition={transition}>
          <MusicNoteIcon sx={iconsStyle} />
        </motion.div>
        <motion.div
          initial={initial}
          animate={animate}
          transition={{
            ...transition,
            delay: 0.5,
          }}
        >
          <HeadsetIcon sx={iconsStyle} />
        </motion.div>
        <motion.div
          initial={initial}
          animate={animate}
          transition={{
            ...transition,
            delay: 1,
          }}
        >
          <SpeakerIcon sx={iconsStyle} scale={2} />
        </motion.div>
      </Box>

      <Box sx={{ width: '60%', marginTop: 5, textAlign: 'center' }}>
        <LinearProgress color='primary' />
        <Typography
          variant='h6'
          sx={(theme) => ({ color: theme.palette.grey[50], marginTop: 2 })}
        >
          Please wait ...
        </Typography>
      </Box>
    </StyledBox>
  )
}

export default Loading
