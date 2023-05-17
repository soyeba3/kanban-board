import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todosSlice";

const AddTask = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  // Handler Funtion
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: 1,
        name: input,
        status: "todos",
      })
    );
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border-solid border-[1px] border-black p-1 mr-2"
        type="text"
        placeholder="Write your task ..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="border-solid border-[1px] border-black hover:bg-[#FF6347] hover:text-white hover:border-[#FF6347] transition duration-300 px-4 py-1 text-[#FF6347] "
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
