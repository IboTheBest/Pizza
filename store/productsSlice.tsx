import { ProductsType } from '@/types'
import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  intialState: ProductsType[]
}

const initialState: CounterState = {
    intialState: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
  },
})

export const {} = counterSlice.actions

export default counterSlice.reducer