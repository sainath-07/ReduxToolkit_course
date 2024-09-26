import { createSlice } from "@reduxjs/toolkit";

export const AddUserSlice = createSlice({
  name: "AddUsers",
  initialState: {
    users: [],
  },
  reducers: {
    addusers: (state, action) => {
      state.users.push(action.payload);
    },
    deleteusers: (state, action) => {
        console.log(action)
      let filterdata = state.users.filter(
        (each, index) => index !== action.payload
      );
      state.users = filterdata;
    },
  },
});

export const { addusers, deleteusers } = AddUserSlice.actions;
export default AddUserSlice.reducer;
