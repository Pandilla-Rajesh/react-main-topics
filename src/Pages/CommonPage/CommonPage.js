import React, { useEffect, useState } from 'react'

const CommonPage=()=>{

    const [windowwidth, setWindowWidth] = useState(window.innerWidth)
    const [count, setCount] = useState(0)
    
    // todo-list-function //

    const [todos, setToDos] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [searchterm, setSearchTerm] = useState('')

    const handleAddTodo=()=>{
        if(inputValue.trim()){
            setToDos([...todos, inputValue.trim()])
            setInputValue('')
            console.log(inputValue, 'value added done')
        }
    }

  const filterTodos = todos.filter((list)=>
    list.toLowerCase().includes(searchterm.toLowerCase())
)

    // end //

    // timer-counter //
    const [time, setTime] = useState(0)
    const [currentDateTime, setCurrentDate] = useState(new Date())
    const [isruning, setIsRuning] = useState(false)

    useEffect(()=>{
                // timer //
        if(isruning){
    
            const interval =setInterval(()=>{
                    setTime((prev) => prev+1)
                    setCurrentDate(new Date())
            }, 200)
            return()=>clearInterval(interval)
        }else{
            setTime(0)
        }

        // end //
    }, [isruning])
    // end //

    const [items, setItems] = useState(['Item1', 'Item2'])
    const addItem=()=>{

        const newItem = `Items ${items.length+1}`
        setItems([...items, newItem])
    }

    const handleReSize=()=>{
        setWindowWidth(window.innerWidth)
    }

    useEffect(()=>{

        setCount((prev) => prev+0)
        // add event-listner //
        window.addEventListener('resize', handleReSize)

        // cleanup on unmount//
        return()=>{
            window.removeEventListener('resize', handleReSize)
        }
    
    }, [])



    return(
        <React.Fragment>
                <section className='p-5'>
            <article className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                       <div className='bg-white p-3 rounded-3 shadow-lg'>
                            <h4 className='text-center my-2'>Welcome to the Common page Component</h4>
                            <h2 className='text-center'>Window Width: {windowwidth}</h2>
                            <h3 className='text-center'>Count: {count}</h3>
                             <div className='text-center my-2'>
                                <button className='btn btn-success p-2' onClick={()=>setCount(count+1)}>Counter</button>
                             </div>
                            <div className='mt-3'>
                                <h4>Timer: {time} Seconds</h4>
                                <h5>Date: {currentDateTime.toLocaleString()}</h5>
                                <button className='btn btn-primary' onClick={()=>setIsRuning(!isruning)}>
                                    {isruning ? 'Start' : 'Stop'}
                                </button>
                            </div>

                       </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='bg-white p-3 rounded-3 shadow-lg'>
                            <h4 className='text-center fw-bold mb-3'>Reconcellation Items and Spread operator using</h4>
                            <div>
                               <ul className='list-group'>
                                {items.map((el, index)=>(
                                    <li key={index} className='list-group-item'>{el}</li>
                                ))}
                               </ul>
                               <div className='d-flex justify-content-end my-3'>
                                    <button className='btn btn-warning' onClick={addItem}>Add Itme</button>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>

        <section className='p-5 bg-success-subtle'>
            <article className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='bg-white shadow-lg rounded-3 p-3'>
                            <h5 className='text-center my-3'>Welcome to the todo list added item in the input field</h5>
                            <div>
                                <form className='d-flex gap-3'>
                                    <div className='input-group'>
                                        <input type="text" className='form-control' 
                                        value={inputValue}
                                        onChange={(event)=>setInputValue(event.target.value)}
                                        onKeyDown={(e)=>e.key === 'enter' && handleAddTodo()}
                                        placeholder='Add new task' />
                                        <button className='input-group-text btn btn-primary'
                                        onClick={handleAddTodo}>Add Task</button>
                                    </div>
                                    <div className='input-group'>
                                        <input type='text' className='form-control' 
                                        value={searchterm} onChange={(e)=>setSearchTerm(e.target.value)}
                                        placeholder='Search Task' />
                                        <button className='input-group-text btn btn-success'
                                        >Search Task</button>
                                    </div>
                                </form>
                            </div>
                            {/* render-todo-list */}
                            <div>
                                <ul className='list-group'>
                                   {filterTodos.length > 0 ? (filterTodos.slice(0,5)?.map((list, index)=>(
                                        <li className='list-group-item' key={index}>{list}</li>
                                   ))):
                                    (
                                        <>
                                            <p>No Data found</p>
                                        </>
                                    )
                                   }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>

        </React.Fragment>
        
    )

}
export default CommonPage