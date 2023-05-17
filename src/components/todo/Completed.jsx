import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../../features/todosSlice";

const Completed = () => {
  const { todos } = useSelector((state) => state.todos) || [];
  const dispatch = useDispatch();

  const drag = (e, id) => {
    e.dataTransfer.setData("todoId", id);
  };

  const drop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("todoId");
    dispatch(changeStatus({ id, status: "completed" }));
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-1/3 border-[1px] border-solid border-black">
      <div className="text-center text-gray-700 font-bold bg-[#FF6347] border-b-[1px] border-black">
        Completed
      </div>
      <div
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowDrop(e)}
        className="m-2 h-full flex flex-col gap-2"
      >
        {todos
          ?.filter((t) => t.status === "completed")
          ?.map((todo) => (
            <div
              draggable
              onDragStart={(e) => drag(e, todo.id)}
              key={todo.id}
              className="bg-gray-400 text-center"
            >
              {todo.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Completed;
