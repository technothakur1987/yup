import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todos:[],
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addtask:(state, action)=>{},
        deletetask:(state, action)=>{},
        clearAll:(state, action)=>{}
    }
})
console.log(todoSlice.actions)
export const { addtask, deletetask, clearAll } = todoSlice.actions
export default todoSlice.reducer
