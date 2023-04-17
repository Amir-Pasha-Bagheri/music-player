import React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material'
import Name from './Name'
import Image from './Image'
import Singers from './Singers'

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

function Starter() {
  const [shouldRender, setShouldRender] = React.useState({
    name: true,
    avatar: false,
    singers: false,
  })

  const pageContainerRef = React.useRef()

  const unmountName = () => {
    setShouldRender((prev) => ({ ...prev, name: false, avatar: true }))
  }

  const unmountAvatar = () => {
    setShouldRender((prev) => ({ ...prev, avatar: false, singers: true }))
  }

  const unmountSingers = () => {
    setShouldRender((prev) => ({ ...prev, singers: false, name: true }))
  }

  return (
    <StyledBox ref={pageContainerRef}>
      {shouldRender.name && (
        <Name pageContainerRef={pageContainerRef} unmount={unmountName} />
      )}

      {shouldRender.avatar && (
        <Image pageContainerRef={pageContainerRef} unmount={unmountAvatar} />
      )}

      {shouldRender.singers && (
        <Singers pageContainerRef={pageContainerRef} unmount={unmountSingers} />
      )}
    </StyledBox>
  )
}

export default Starter
