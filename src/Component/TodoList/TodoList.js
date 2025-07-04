import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const TodoList = ()=>{

    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')
    
   const addTodo=()=>{
     if(newTodo.trim() !==''){
        setTodos((prevTodo) => [...prevTodo, newTodo])
        setNewTodo('')
    }
   }

   const compltedTodo = (index)=>{
        setTodos((prevTodo)=>{
            const updatedTodos = [...prevTodo]
            updatedTodos.slice(index, 1)
            return updatedTodos
        })
   }

    return(
        <section className='bg-gradient-to-tr from-blue-900 to-violet-500 p-6'>
            <div className='container ms-auto'>
                <div className='flex items-center justify-center gap-3 mb-4'>
                    <div className='grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1'>
                        <div className='bg-white shadow-sm rounded p-4'>
                           <h1 className='text-3xl'>Todo List</h1>
                            <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
                            <ul className=' list-disc'>
                                {todos?.map((list, index)=>(
                                    <TodoItem key={index} list={list} onComplete={()=>compltedTodo(index)} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TodoList