import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: boolean
}

const initialState: CounterState = {
  value: false,
}

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<boolean>) => {
        state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {incrementByAmount} = darkModeSlice.actions

export default darkModeSlice.reducer