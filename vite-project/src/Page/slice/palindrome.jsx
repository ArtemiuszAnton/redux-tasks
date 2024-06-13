import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'Palindrome',
    initialState: '',
    reducers: {
        checkOnPalindrome: (_state, value) => {
            return value.payload
        },

    },
});

const { checkOnPalindrome } = slice.actions;
const reducer = slice.reducer

export default reducer;
export { checkOnPalindrome }