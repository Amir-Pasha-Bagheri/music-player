import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: null,
  avatar: null,
  favoriteSingers: [],
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
  },
})

export const { updateName, updateAvatar, updatefavoriteSingers } =
  userSlice.actions

export default userSlice.reducer
