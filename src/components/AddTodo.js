import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/todo/todoSlice'

const AddTodo = () => {
    const [text,setText] = useState()
    const dispatch = useDispatch()



    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(
 addTodo(text)
        )
        setText("")

    }
  return (
    <div>
        <form className="responsive-form" onSubmit={handleSubmit}>
     
      <div className="form-group">
        <label htmlFor="message">Todo Text:</label>
        <textarea
          id="message"
          name="message"
          value={text}
          onChange={(e)=>setText(e.target.value)}
         
        />
      </div>
      <button type="submit">Submit</button>
    </form>
      
    </div>
  )
}

export default AddTodo
