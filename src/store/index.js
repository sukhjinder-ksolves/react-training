import { configureStore } from '@reduxjs/toolkit'
import  projectListSlice  from './slices/projectListSlice';

const store = configureStore({
  reducer: {
    projects: projectListSlice,
  },
})

export default store;