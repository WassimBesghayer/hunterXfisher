import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './productSlice'
import  userSlice from './userSlice'
import orderSlice from './orderSlice'

export default configureStore({
  reducer: {
    product:productSlice,
    user:userSlice,
    order:orderSlice
  }
})