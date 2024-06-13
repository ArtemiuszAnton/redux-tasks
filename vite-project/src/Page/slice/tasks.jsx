import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'acceptTasks',
    initialState: ['task1', 'task2', 'task3'],
    reducers: {
        'addTasks': (state, data) => {
            return [...state, data.payload]
        },

        'deleteTasks': (state, data) => {
            const res = state.filter(el => el != data.payload);
            return [...res];
        }
    },
});

const { addTasks, deleteTasks } = slice.actions;
const reducer = slice.reducer

export default reducer;
export { addTasks, deleteTasks }
