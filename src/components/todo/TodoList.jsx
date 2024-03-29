import Completed from "./Completed";
import Inprogress from "./Inprogress";

import Todos from "./Todos";

const TodoList = () => {
  return (
    <div className="flex overflow-hidden gap-6 h-full">
      <Todos />
      <Inprogress />
      <Completed />
    </div>
  );
};

export default TodoList;
