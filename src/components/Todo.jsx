
import { X } from "lucide-react";



function TodoList({ id, handleDelete, input }) {



  return (
    <div className="flex px-4 justify-between items-center w-full border bg-white rounded-2xl py-2">
      <div className="flex gap-3">
        <input
          type="checkbox"
        />
        <p className={``}>
          {input.taskName}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-red-500 p-1 justify-center items-center text-white rounded-full hover:bg-red-600 hover:cursor-pointer"
          onClick={() => handleDelete(id)}
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

export default TodoList;