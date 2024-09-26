import { configureStore } from "@reduxjs/toolkit";
import counterRecuder from "./CounterSlice";
export const counterAppStore = configureStore({
  reducer: {
    Counter: counterRecuder,
  },
});
