import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
  variant: null,
  text: '',
  color: null,
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
