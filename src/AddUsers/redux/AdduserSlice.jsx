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
      // console.log(action)
      let filterdata = state.users.filter(
        (each, index) => index !== action.payload
      );
      state.users = filterdata;
    },

    udpateusers: (state, action) => {
      const { payload, users } = action;
      let updatedData = state.users.map((value, index) => {
        if (index === payload) {
          return users;
        } else {
          return value;
        }
      });

      state.users = updatedData;
    },
  },
});

export const { addusers, deleteusers,udpateusers } = AddUserSlice.actions;
export default AddUserSlice.reducer;
