import { combineReducers } from '@reduxjs/toolkit'
import user from './userSlice'
import message from './messageSlice'

const slicesRoots = combineReducers({
  user,
  message,
})

export default slicesRoots
