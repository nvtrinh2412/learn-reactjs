const {createSlice} = require('@reduxjs/toolkit');

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  }
})

const {actions,reducers} = counterSlice;
export const {increment,decrement} = actions;
export default reducers;