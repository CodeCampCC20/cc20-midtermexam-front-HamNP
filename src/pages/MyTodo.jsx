
import axios from "axios";
import React, { useEffect, useState } from "react";
import TodoList from "../components/Todo";

function MyTodo() {
  const [input, setInput] = useState()
  const [todo, setTodo] = useState([])

  function hdlChange(e) {
    setInput ( {taskName: e.target.value,userId: 15} )
  }
  const hdlClick = async() =>  {
    try {
      const res = await axios.post ("http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos",input)
      console.log(res.data)
      setTodo([...todo, res.data.todo])
    } catch (error) {
      console.log(error)
    }
  }
  const fetchData = async() => {
    const res = await axios.get("http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/15")
    console.log(res.data)
    setTodo(res.data.todos)
  }
  useEffect(() => {
    fetchData()
  },[])
  console.log(input)
  console.log(todo)

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/${id}/15`)
      fetchData()
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="flex items-center justify-center">
      <div className="shadow-lg rounded-3xl p-16 bg-gray-600">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
         Todo List
        </h1>
        <div  className="mb-4 flex">
          <input 
            onChange={hdlChange}
            type="text"
            placeholder="Yours todo"
            className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none
          focus:ring-2 focus:ring-gray-500 bg-white"
          />
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded-r-lg
          hover:bg-gray-600"
          onClick={hdlClick}
          >
            Add
          </button>
        </div>
        <ul>
        {todo.map((item) => (
                <TodoList
                  key={item.id}
                  id={item.id}
                  input={item}
                  handleDelete={handleDelete}
                />
              ))}

        </ul>
        <ul className="space-y-2"></ul>{" "}
      </div>{" "}
    </div>
  );
}

export default MyTodo;