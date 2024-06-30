import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    questions: [
        {
            questionId:12312134234,
            questionLevel:'easy', //["hard, medium, easy"]
            questionTitle: 'this is question title',
            questionDescription: 'this is an sample description for the questions'
        },
    
    ],
    isLoading:false,
    isError: null,
    isSuccess: false,
}

const questionSlice = createSlice({
    name:'question',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {

    }
});


export const {} = questionSlice.actions;

const questionReducer = questionSlice.reducer;
export default questionReducer;

export const questionSelector = (state) => state.question;