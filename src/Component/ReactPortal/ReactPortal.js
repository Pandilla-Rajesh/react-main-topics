import React, { useCallback, useMemo, useState } from 'react'
import Modal from './Modal'
import ModalPage from './ModalPage'
import Reducer from '../Reducer/Reducer'

const ReactPortal=({num})=>{

    // useCallback function //

    const [count, setCount] = useState(0)

    const increment=useCallback(()=>{
        setCount((prev) => prev + 1)
    }, [count])

    const result = useMemo((num)=>{
        return num * 2
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
                        <Child increment={increment} />
                        <div>Result: {result}</div>
                    </div>
                    {/* css-using-even-odd-class */}
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
                </div>
            </article>
       </section>
    )
}

function Child({increment}){
    return(
        <>
        <h2>{}</h2>
        <button className='btn btn-danger' onClick={increment}>Increment</button>
        </>
    )
}

export default ReactPortal