import { createSlice,nanoid } from "@reduxjs/toolkit";
//=========  initail state for redux =======
const initialState = {
    todos:[{id:1,text:"hello world"}]
}
//======  creating slices =====================
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
         const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)


        },
        removeTodo:(state,action)=>{
            const filteredData = state.todos.filter((item)=>item.id !== action.payload)
            console.log("Remove todo",filteredData)
            state.todos = filteredData

        }

    }

})
export const {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer
