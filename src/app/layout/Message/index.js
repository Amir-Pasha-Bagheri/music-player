import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideMessage } from '../../store/messageSlice'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import PanToolIcon from '@mui/icons-material/PanTool'
import PhotoIcon from '@mui/icons-material/Photo'
import DoneAllIcon from '@mui/icons-material/DoneAll'

const IconVariants = {
  limit: <PanToolIcon sx={{ fontSize: 25, alignSelf: 'center' }} />,
  image: <PhotoIcon sx={{ fontSize: 25, alignSelf: 'center' }} />,
  done: <DoneAllIcon sx={{ fontSize: 25, alignSelf: 'center' }} />,
}

function Message() {
  const { open, iconVariant, text, textVariant, autoHideDuration } =
    useSelector((state) => state.message)

  const ref = React.useRef()

  const dispatch = useDispatch()

  const closeAlert = (event, reason) => {
    if (reason !== 'clickaway') {
      dispatch(hideMessage())
    }
  }

  const Icon = React.useMemo(() => IconVariants[iconVariant], [iconVariant])

  return (
    <Snackbar
      ref={ref}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={closeAlert}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    >
      <Alert
        severity={textVariant || 'info'}
        variant='filled'
        icon={Icon}
        sx={{ fontSize: 18 }}
        onClose={closeAlert}
      >
        {text}
      </Alert>
    </Snackbar>
  )
}

export default Message
