import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    //Add a task
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      //Set the data to local storage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    //When change the status
    changeStatus: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].status = action.payload.status;
      //Set the data to local storage
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    //Get the data from locastorage and set it to redux state
    setTodos: (state) => {
      state.todos = localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : [];
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, changeStatus, setTodos } = todosSlice.actions;
