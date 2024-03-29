import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AddTask from "./components/addTask/AddTask";
import TodoList from "./components/todo/TodoList";
import { setTodos } from "./features/todosSlice";

function App() {
  const dispatch = useDispatch();

  //Persist the data after reload
  useEffect(() => {
    dispatch(setTodos());
    //eslint-disable-next-line
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col gap-5 items-center h-[83%] w-4/6 bg-gray-200 rounded-md p-4 my-8">
        <div className="pt-6">
          <AddTask />
        </div>
        <div className="w-4/6 min-h-[70%]">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
