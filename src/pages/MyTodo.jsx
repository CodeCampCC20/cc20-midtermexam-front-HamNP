import { useState } from 'react'



function MyToDo() {
  
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  const addTodo = () => {
    if(input.trim()){
      setTodos([...todos, {id: Date.now(), text: input, completed: false}])
      setInput("")
    }
  }
  

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
    <div className='h-120 w-200 bg-gray-500 shadow-lg rounded-3xl flex flex-col gap-10 justify-center items-center'>
      <h1 className='text-white text-6xl'>My Todo</h1>
      <div>
        <input
        type="text"
        name=""
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='h-15 w-170 text-3xl border-b pl-6' placeholder='new task'/>
      <button
      onClick={addTodo}
      className='h-15 w-20 bg-gray-500 text-white text-2xl rounded-3xl cursor-pointer hover:underline'>Add</button>
      </div>

      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}
            className='flex items-center gap-20'>
              <input type="checkbox"
              checked={todo.completed}
              onChange={() => setTodos(
                todos.map((t) => (
                  t.id === todo.id ? {...t, completed: !t.completed} : t
                ))
              )}
              className='h-10 w-10'
              />
              <p className={`flex-grow text-white text-4xl ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}>{todo.text}</p>

              <button onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
                className="text-white text-3xl cursor-pointer hover:underline">
                X
              </button>
            </li>
          ))
        }
      </ul>

      <div>
        
      </div>
      <div></div>
      <div></div>
    </div>
    </div>
  )
}

export default MyToDo