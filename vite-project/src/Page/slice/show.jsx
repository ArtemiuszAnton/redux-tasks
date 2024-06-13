import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'swapFlag',
    initialState: false,
    reducers: {
        showParagraf: () => true,
        hideParagraf: () => false
    },
});

const { showParagraf, hideParagraf } = slice.actions;
const reducer = slice.reducer

export default reducer;
export { showParagraf, hideParagraf }
