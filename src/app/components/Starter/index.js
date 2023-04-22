import React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material'
import Name from './Name'
import Image from './Image'
import Singers from './Singers'
import globalStorage from '../../configs/globalStorage'
import { IS_AUTH, USER } from '../../constants/globalStorage'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

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

  const user = useSelector(({ user }) => user)

  const authenticated = globalStorage.getItem(IS_AUTH)

  const pageContainerRef = React.useRef()

  const unmountName = () => {
    setShouldRender((prev) => ({ ...prev, name: false, avatar: true }))
  }

  const unmountAvatar = () => {
    setShouldRender((prev) => ({ ...prev, avatar: false, singers: true }))
  }

  const unmountSingers = () => {
    setShouldRender((prev) => ({ ...prev, singers: false }))
    globalStorage.setItem(IS_AUTH, true)
    globalStorage.setItem(USER, user)
  }

  if (authenticated) return <Navigate to='landing' replace />

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
