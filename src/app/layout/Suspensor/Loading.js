import React from 'react'
import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import HeadsetIcon from '@mui/icons-material/Headset'
import SpeakerIcon from '@mui/icons-material/Speaker'
import { motion, useTransform } from 'framer-motion'

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

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: 'spring', duration: 1.5, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
}

function Loading() {
  return (
    <StyledBox>
      <motion.svg
        width='600'
        height='600'
        viewBox='0 0 600 600'
        initial='hidden'
        animate='visible'
      >
        <motion.line
          x1='0'
          y1='0'
          x2='600'
          y2='0'
          stroke='#00cc88'
          variants={draw}
          custom={2}
        />
      </motion.svg>

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
    </StyledBox>
  )
}

export default Loading
