import { configureStore } from "@reduxjs/toolkit";
import AdduserSlice from "./AdduserSlice";

const AddUserStore=configureStore({
    reducer:{
        AddUsers : AdduserSlice,
    }
})

export default AddUserStore