import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: []
}

export const projectListSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, action) => {
            state.value.push(action.payload)
        },
        editProject: (state, action) => {
            console.log(action.payload)
            state.value.map((project) => {
                if(project.id === action.payload.id) {
                    project.name = action.payload.name
                    project.deadline = action.payload.deadline
                }
            })
        },
        deleteProject: (state, action) => {
            state.value = state.value.filter((project) => project.id !== action.payload);
        }
    }
})

export const { addProject, editProject, deleteProject } = projectListSlice.actions

export default projectListSlice.reducer