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
  const { open, variant, text, color } = useSelector((state) => state.message)

  const dispatch = useDispatch()

  const closeAlert = () => {
    dispatch(hideMessage())
  }

  const Icon = React.useMemo(() => IconVariants[variant], [variant])

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     if (open) {
  //       closeAlert()
  //     }
  //   }, 2000)
  // }, [open])

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={closeAlert}
      anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
    >
      <Alert
        severity={color || 'info'}
        variant='filled'
        icon={Icon}
        sx={{ fontSize: 18 }}
      >
        {text}
      </Alert>
    </Snackbar>
  )
}

export default Message
