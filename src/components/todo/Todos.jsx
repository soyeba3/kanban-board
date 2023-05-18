import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../../features/todosSlice";

const Todos = () => {
  const { todos } = useSelector((state) => state.todos) || [];
  const dispatch = useDispatch();

  //For drag and drop functionality
  const drag = (e, id) => {
    e.dataTransfer.setData("todoId", id);
  };

  const drop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("todoId");
    dispatch(changeStatus({ id, status: "todos" }));
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-1/3 overflow-y-scroll no-scrollbar flex flex-col border-[1px] border-solid border-black">
      <div className="text-center text-gray-700 font-bold bg-[#FF6347] border-b-[1px] border-black">
        To Do
      </div>
      <div
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowDrop(e)}
        className="h-full bg-white flex flex-col gap-2 p-2"
      >
        {todos
          ?.filter((t) => t.status === "todos")
          ?.map((todo) => (
            <div
              draggable
              onDragStart={(e) => drag(e, todo.id)}
              key={todo?.id}
              className="bg-gray-300 text-center cursor-pointer border-[1px] border-black"
            >
              {todo.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Todos;
