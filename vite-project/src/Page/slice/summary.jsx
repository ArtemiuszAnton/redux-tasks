import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'getSummary',
    initialState: {
        value1: '',
        value2: ''
    },
    reducers: {
        getInp1: (state, data) => {
            return { ...state, value1: data.payload }
        },
        getInp2: (state, data) => {
            return { ...state, value2: data.payload }
        },

    },
});

const { getInp1, getInp2 } = slice.actions;
const reducer = slice.reducer

export default reducer;
export { getInp1, getInp2 }