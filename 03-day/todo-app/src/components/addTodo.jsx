import { useState } from "react"


function AddTodo(prop){

    const [input, setInput]= useState("")

    return (
        <div>
            <input 
            type="text"
            value={input}
            onChange={
                (e)=> setInput(e.target.value)
            }
             />
            <button
                onClick={
                    ()=>{
                        const newTodo = [...prop.todos,{
                            name:input
                        } ]
                        prop.setTodos(newTodo)
                    }
                }
            >Add Todo</button>
        </div>
    )
}


export default AddTodo