import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'changeLanguage',
    initialState: 'ru',
    reducers: {
        changeState: (_state, data) => data.payload
    },
});

const { changeState } = slice.actions;
const reducer = slice.reducer

export default reducer;
export { changeState }
