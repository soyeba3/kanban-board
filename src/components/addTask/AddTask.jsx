const AddTask = () => {
  return (
    <form>
      <input
        className="border-solid border-[1px] border-black p-1 mr-2"
        type="text"
        placeholder="Write your task ..."
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
