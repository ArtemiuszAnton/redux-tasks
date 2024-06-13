import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'changeSize',
    initialState: 12,
    reducers: {
        plusSize: (state) => state + 1,
        minusSize: (state) => state - 1
    },
});

const { plusSize, minusSize } = slice.actions;
const reducer = slice.reducer

export default reducer;
export { minusSize, plusSize }
