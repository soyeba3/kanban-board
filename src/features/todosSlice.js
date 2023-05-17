import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    changeStatus: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[index].status = action.payload.status;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    setTodos: (state) => {
      state.todos = JSON.parse(localStorage.getItem("todos"));
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, changeStatus, setTodos } = todosSlice.actions;
