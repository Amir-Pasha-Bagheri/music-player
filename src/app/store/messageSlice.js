import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
  iconVariant: null,
  text: '',
  textVariant: null,
  autoHideDuration: null,
}

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    showMessage: (state, action) => {
      Object.assign(state, action.payload)
      state.open = true
    },
    hideMessage: (state, action) => {
      state.open = false
    },
  },
})

export const { showMessage, hideMessage } = messageSlice.actions

export default messageSlice.reducer
