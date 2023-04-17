import { combineReducers } from '@reduxjs/toolkit'
import user from './userSlice'

const slicesRoots = combineReducers({
  user,
})

export default slicesRoots
