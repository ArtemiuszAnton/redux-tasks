import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'validPwd1',
    initialState: {
        inp: '', check: false
    },
    reducers: {
        'getInp': (state, data) => {
            return { ...state, inp: data.payload }
        },
        'checkValid': (state) => {
            return { ...state, check: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm.test(state.inp) }
        }

    },
});

const { getInp, checkValid } = slice.actions;
const reducer = slice.reducer

export default reducer;
export { getInp, checkValid }


//  
