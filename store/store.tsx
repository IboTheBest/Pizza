
"use client"
import { configureStore } from '@reduxjs/toolkit'
import { orderSlice } from './productsSlice'


export const store = configureStore({
  reducer:orderSlice.reducer,
})
