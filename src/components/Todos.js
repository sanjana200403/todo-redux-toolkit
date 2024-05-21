import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../Features/todo/todoSlice'
const Todos = () => {
    const todos = useSelector(state=>state.todos)
    const  dispatch = useDispatch()

  return (
    <div className="card-list">
        {
            todos.map((todo)=>(
                <div  className="card"
                key={todo.id}
                >
                <p>{todo.text}</p>
                <button
                onClick={()=>dispatch(removeTodo(todo.id))}
                >remove</button>
                </div>
            ))
        }
      
    </div>
  )
}

export default Todos
