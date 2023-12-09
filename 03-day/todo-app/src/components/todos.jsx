import { useState } from 'react'


// components
import Todo from "./todo"
import AddTodo from './addTodo'


function Todos(){
    const [todos, setTodos] = useState([
    {name:"todo 1"},
    {name:"todo 2"},
    {name:"todo 3"},
    {name:"todo 4"},
    ])
  
    return (
      <div id="todos">
        {
          todos.map(  (value, index) => <Todo todo={value} key={index} /> )
        }
        <AddTodo  setTodos={setTodos} todos={todos} />

      </div>
    )
}

  
export default Todos


