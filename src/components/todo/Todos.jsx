const Todos = () => {
  return (
    <div className="w-1/3 h-full border-[1px] border-solid border-black">
      <div className="text-center text-gray-700 font-bold bg-[#FF6347] border-b-[1px] border-black">
        To Do
      </div>
      <div className="m-2 h-full flex flex-col gap-2">
        <div className="bg-gray-400 text-center">Task 1</div>
        <div className="bg-gray-400 text-center">Task 2</div>
        <div className="bg-gray-400 text-center">Task 2</div>
      </div>
    </div>
  );
};

export default Todos;
