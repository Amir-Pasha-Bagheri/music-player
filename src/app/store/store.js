import { configureStore } from '@reduxjs/toolkit'
import slicesRoots from './slicesRoots'

const store = configureStore({
  reducer: slicesRoots,
})

export default store
