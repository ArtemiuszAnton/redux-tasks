import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'validPwd',
    initialState: '',
    reducers: {
        checkValid: (_state, value) => {
            return value.payload
        },

    },
});

const { checkValid } = slice.actions;
const reducer = slice.reducer

export default reducer;
export { checkValid }