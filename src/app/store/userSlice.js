import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: null,
  avatar: null,
  favoriteSingers: [],
  authenticated: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload
    },
    updateAvatar: (state, action) => {
      state.avatar = action.payload
    },
    updatefavoriteSingers: (state, action) => {
      state.favoriteSingers = action.payload
    },
    updateAuthentication: (state, action) => {
      state.authenticated = true
    },
  },
})

export const {
  updateName,
  updateAvatar,
  updatefavoriteSingers,
  updateAuthentication,
} = userSlice.actions

export default userSlice.reducer
