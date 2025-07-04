import React from 'react'

const TodoItem = ({todo, onComplete})=>{
    return(
        <section className='w-full bg-gradient-to-tr from-green-800 to-green-950 h-full p-6 rounded mb-4'>
            <div className='container ms-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-1 md:grid-cols-1'>
                    <div className='bg-white shadow-sm rounded p-4'>
                        <ul className='list-disc'>
                            <li>
                                <p>{todo}</p>
                                <button onClick={onComplete} className='bg-blue-600 rounded-lg px-3 py-2 text-slate-50 hover:bg-blue-900
                                transition-all 300 ease-in-out'>
                                    Complete
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default TodoItem