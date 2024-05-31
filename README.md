redux tool kit 

Rtk is library for manage complex state management in react 
useCases:
A.Boiler Plate Reduction
B.Simplified Store Configuration
C.Reducers with createSlice function
D.Immutablity : it uses immer libraray 
E.Redux dev tools integration


project folder structure (by creating a todo App)

WE have Todo component and the code on todoComponent is 

import React from "react";
const Todo = () => {
  return (
    <div className="container-fluid py-5">
      <h1 className="text-center fw-bold">Todo List</h1>
      <div className="addTaskDiv d-flex align-items-center justify-content-center  mx-auto p-2 rounded">
        <input
          type="text"
          name="addTask"
          id="addTask"
          placeholder="Add a New Task"
        />
        <button className="btn btn-sm btn-primary  rounded-pill  text-uppercase">
          Add Task
        </button>
      </div>

      <div className="TaskList d-flex flex-column justify-content-start align-items-center py-5">
        <ul className="list-unstyled">
          <li className="TaskLi px-5 py-2 rounded fs-3 fw-bold mb-2">
            Todo -1{" "}
            <button className="btn btn-sm  mb-0 delBtn float-end pt-2">
              <i className="mb-0 fa-solid fa-trash text-danger fs-3"></i>
            </button>
          </li>

          <li className="TaskLi px-5 py-2 rounded fs-3 fw-bold ">
            Todo -1{" "}
            <button className="btn btn-sm  mb-0 delBtn float-end pt-2">
              <i className="mb-0 fa-solid fa-trash text-danger fs-3"></i>
            </button>
          </li>
        </ul>
        <div className="clearDiv">
            <button className="btn btn-sm clearBtn">Clear All</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;


To get started first you need to install redux tookit and react-redux using 
1.npm install @reduxjs/toolkit
2.npm install react-redux


*creating a Slice
creaSlice Method :Its a utility function that helps in creating redux slices . A slice is just a piece of redux Store state and also includes the reducers function for that state 

we create store folder with slices folder in it and a todoSlice.jsx in it 

now in todoSlice.jsx 
we have 
import {createSlice} from '@reduxjs/toolkit'
const initialState = {
	todos:[],
}
const todoSlice = createSlice({
	name:'todo',
	initialState,
	reducers:{
			addTask:(state, action)=>{},
			deletetask:(state, action)=>{},
			clearAll:(state, action)=>{}

}
})
export const { addtask, deletetask, clearAll } = todoSlice.actions
export default todoSlice.reducer


*Configuriong a Store and connecting it to Slice 
Store is a centralized source of truth . here we create a file store.jsx in store folder 
in store.jsx we have 

import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";
const store = configureStore({
    reducer:todoSlice
})
export default store

and we wrap main.jsx file with provider like this 

import {Provider} from 'react-redux'
import store from './store/store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    </Provider>
   
  ,
)



