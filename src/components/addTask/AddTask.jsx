import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../features/todosSlice";

const AddTask = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  // Handler Funtion
  const handleSubmit = (e) => {
    e.preventDefault();

    //Check Input Validation
    if (input.length < 3) {
      return alert("Text must be minimum 3 characters");
    }

    dispatch(
      addTodo({
        id: uuidv4(), // Generate Unique Id
        name: input,
        status: "todos",
      })
    );

    //Blank the input field after add a task
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
        className="border-solid border-[1px] border-black hover:bg-[#FF6347] hover:text-white hover:border-[#FF6347] transition duration-300 px-4 py-1 text-[#FF6347] font-bold bg-white"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddTask;
