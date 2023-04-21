import { toast } from 'react-toastify'
import CloseIcon from '@mui/icons-material/Close'

const closeButton = <CloseIcon />
const customTost = {
  info: (message, options) =>
    toast.info(message, {
      style: { backgroundColor: '#E5B8F4', color: 'black' },
      closeButton,
      ...options,
    }),
  success: (message, options) =>
    toast.success(message, {
      //   style: { backgroundColor: '#E5B8F4', color: 'black' },
      closeButton,
      ...options,
    }),
  error: (message, options) =>
    toast.error(message, {
      //   style: { backgroundColor: '#E5B8F4', color: 'black' },
      closeButton,
      ...options,
    }),
}

export default customTost
