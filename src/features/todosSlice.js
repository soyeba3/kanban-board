import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState : {
        id: '',
        name : '',
        status : ''
    },
    reducers: {

    }
})

export default todosSlice.reducer;