import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../../features/todosSlice";

const Inprogress = () => {
  const { todos } = useSelector((state) => state.todos) || [];
  const dispatch = useDispatch();

  //For drag and drop functionality
  const drag = (e, id) => {
    e.dataTransfer.setData("todoId", id);
  };

  const drop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("todoId");
    dispatch(changeStatus({ id, status: "inProgress" }));
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-1/3 h-full border-[1px] border-solid border-black">
      <div className="text-center text-gray-700 font-bold bg-[#FF6347] border-b-[1px] border-black">
        In Progress
      </div>
      <div
        onDrop={(e) => drop(e)}
        onDragOver={(e) => allowDrop(e)}
        className="m-2 h-full flex flex-col gap-2"
      >
        {todos
          ?.filter((t) => t.status === "inProgress")
          ?.map((todo) => (
            <div
              draggable
              onDragStart={(e) => drag(e, todo.id)}
              key={todo.id}
              className="bg-gray-400 text-center cursor-pointer"
            >
              {todo.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Inprogress;
