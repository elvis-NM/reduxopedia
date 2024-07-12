import { createSlice } from "@reduxjs/toolkit";
import { resetDestination } from "./destinationSlice";

const initalState = { count: 10 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initalState,
  reducers: {
    //here we will define all actions
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    decrementMultiplier: (state, action) => {
      state.count -= action.payload;
    },
    incrementMultiplier: (state, action) => {
      state.count += Number(action.payload);
    },
    // resetCounter: (state) => {
    //   state.count = 10;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(resetDestination.toString(), (state, action) => {
      state.count += Number(action.payload);
      state.count = 10;
    });
  },
});

export const {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
  // resetCounter,
} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
