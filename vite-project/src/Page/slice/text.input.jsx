import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'addValue',
    initialState: '',
    reducers: {
        addValueToInp: (_state, value) => {
            return value.payload
        },

    },
});

const { addValueToInp } = slice.actions;
const reducer = slice.reducer

export default reducer;
export { addValueToInp }
