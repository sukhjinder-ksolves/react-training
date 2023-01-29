import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const projectListSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProjectName: (state, action) => {
            console.log(action.payload.deadline)
            state.value.push(action.payload)
            console.log(state.value)
        }
    }
})

export const { addProjectName } = projectListSlice.actions

export default projectListSlice.reducer