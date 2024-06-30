import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users:[
        {
            username:"",
            email:""
        }
    ],
    isLoading: false,
    isError: null,
    isSuccess: false,
    isUserLoggedIn: false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {

    }
});


export const {} = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;

export const userSelector = (state) => state.user