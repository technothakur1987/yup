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
