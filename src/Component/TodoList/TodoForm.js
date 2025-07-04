import React from 'react'

const TodoForm = ({newTodo, setNewTodo, addTodo})=>{
    return(
        <section>
            <div className='container ms-auto'>
                <div className='flex items-center justify-center'>
                    <div className='grid grid-cols-1'>
                        <div className='bg-white shadow-lg p-4 rounded mb-4'>
                            <input type="text" name='newTodo' 
                            className='border rounded px-3 py-2 bg-slate-500 text-slate-50 me-2' 
                            value={newTodo} placeholder='Enter a New ToDO' onChange={(e)=>setNewTodo(e.target.value)} />
                            <button onClick={addTodo} className='text-slate-50 bg-green-700 px-3 py-2 rounded'>Add Todo</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TodoForm