import React, { useEffect, useState } from 'react'
import Greeting from '../../Component/Greeting/Greeting'
import axios from 'axios';

function Home({ name }) {

    const [count, setCount] = useState(0)

    return (
        <section className='bg-gradient-to-tr from-violet-800 to-violet-500 p-5'>
            <article className='container ms-auto'>
                <div className='flex items-center justify-center flex-col'>
                    <h1 className='text-2xl lg:text-2xl font-bold text-slate-100 sm:text-sm'>
                        React Hooks Examples
                    </h1>
                </div>
                <div className='grid grid-cols-3 gap-4 mt-4 lg:grid-cols-3 md:grid-cols-2'>
                    
                    <div className='bg-white rounded shadow-lg px-3 py-2'>
                        <h3 className='text-violet-900 font-bold text-4xl text-center'>
                            React Hooks
                        </h3>
                        <div className='flex items-center justify-between gap-3'>
                                          <div>
                            <ul className='list-decimal list-inside text-gray-500 pl-5'>
                                <li className="flex items-center">
                                    <svg class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span>useState</span>
                                </li>
                                <li className="flex items-center">
                                    <svg class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span>useEffect</span>
                                </li>
                                <li className="flex items-center">
                                    <svg class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span>useRef</span>
                                </li>
                                <li className="flex items-center">
                                    <svg class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span>useReducer</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className='list-decimal list-inside text-gray-700 pl-5'>
                               <li className="flex items-center">
                                  <svg class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span>useMemo</span>
                               </li>
                               <li className="flex items-center">
                                  <svg class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span>useCallback</span>
                               </li>
                               <li className="flex items-center">
                                  <svg class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span>useContext</span>
                               </li>
                               <li className="flex items-center">
                                  <svg class="w-3.5 h-3.5 me-2 text-gray-500 dark:text-gray-400 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span>useLayoutEffect</span>
                               </li>
                            </ul>
                        </div>
                        </div>
                    </div>

                    <div className='bg-white shadow-lg rounded px-3 py-2'>
                        <Counter count={count} setCount={setCount} />
                    </div>

                </div>
            </article>
        </section>
    )
}

const Counter=()=>{

    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title = `You Clicked: ${count} times`
        console.log(`you clicked: ${count} times`)
    }, [count])

    return(
        <>
          <h3 className='text-xl text-slate-800'>You Clicked: {count} times</h3>
          <button className='border rounded px-3 py-2 bg-blue-900 text-slate-100'
          onClick={()=>setCount((prev) => prev+1)}>Click Me</button>
        </>
    )
}

export default Home