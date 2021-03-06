import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

// createSlice 함수는 mutation method를 사용할 수 있으며,
// 함수 내에서 사용된 mutation method를 자동으로 detect해서
// state를 override 시킨다.
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
