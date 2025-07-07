import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Modal from './Modal'
import ModalPage from './ModalPage'
import Reducer from '../Reducer/Reducer'

const ReactPortal=({num})=>{

    // useCallback function //

    const [count, setCount] = useState(0)

    const increment=useCallback(()=>{
        setCount((prev) => prev + 1)
    }, [])

    // lifting-state-up//

    const [text, setText] = useState('')
    useEffect(()=>{
        const storeValues = localStorage.getItem('myInput')
        if(storeValues){
            setText(storeValues)
        } 
                    console.log(storeValues)
    }, [])

  useEffect(()=>{
    localStorage.setItem('InputValue', text)
    console.log(text, 'store input value')
  }, [text])



    const result = useMemo(() => {
  const safeNum = Number(num) || 0;
  return safeNum * 2;
}, [num])

    const div = document.querySelector('div')
    console.log(div.dataset.start)
    console.log(div.dataset.end)

    // end //

    return(
       <section className='bg-gray'>
            <article className='container'>
                <div className='row'>
                    <div className='col my-4'>
                        <h1 className='text-center fs-1 text-primary fw-bold mb-3'>Welcome to the ReactPortal</h1>
                       <ModalPage/>
                    </div>
                    <div className='col'>
                        <Reducer/>
                    </div>
                    <div className='col'>
                        <Child count={count} increment={increment} />
                        <div>Result: {result}</div>
                    </div>
                    {/* css-using-even-odd-class */}

                    <div className='flex items-center justify-center mb-4'>
                         <h2 className='text-2xl font-bold text-slate-600 text-center'>
                         CSS With NTH-Child an Even and Odd
                      </h2>
                    </div>
                   <div className='main-box'>
                    <div className='box' dataset-start="10" dataset-end="11">class box</div>
                    <div className='box'>class box</div>
                    <div className='box'>class box</div>
                    <div className='box'>class box</div>
                    <div className='box'>class box</div>
                    <div className='box'>class box</div>
                    <div className='box'>class box</div>
                    <div className='box'>class box</div>
                    <div className='box'>class box</div>
                    <div className='box'>class box</div>
                   </div>
                   {/*  */}

                   {/* lifting-state-up */}
                <div className='flex items-center justify-center mb-4 mt-4 flex-col'>
                        <h2 className='text-2xl text-orange-900 font-bold mb-4'>
                            Liffting State Up
                        </h2>
                        <InputBox text={text} setText={setText} />
                        <DisplayText text={text} />
                    </div>
                   {/* end */}

                </div>
            </article>
       </section>
    )
}

function Child({count, increment}){
    return(
        <>
        <h2>{count}</h2>
        <button className='btn btn-danger' onClick={increment}>Increment</button>
        </>
    )
}

const InputBox=({text, setText})=>{
    return(
        <>
            <input type="text" name='text'
            className='border border-gray-600 w-full px-2 py-2 rounded shadow-lg' 
            value={text} 
            onChange={(e)=>setText(e.target.value)} 
            placeholder='enter text' />
        </>
    )
}

const DisplayText = ({text})=>{
    return(
        <p>You Typed:{text}</p>
    )
}

export default ReactPortal