import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => {
            return state + 1
        },
        decrement: (state) => {
            return state - 1
        },
        reset: () => {
            return  0
        }
    },
});

const { increment, decrement, reset } = slice.actions;
const reducer = slice.reducer

export default reducer;
export { increment, decrement, reset }
