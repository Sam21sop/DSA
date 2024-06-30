import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice/userSlice";
import questionReducer from "./questionsSlice/questionSlice";


const store = configureStore({
    reducer:{
        userReducer,
        questionReducer
    }
});

export default store;