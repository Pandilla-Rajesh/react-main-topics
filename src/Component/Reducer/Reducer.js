import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer } from 'react'

const initialState = {count:0}

function Reducer(state, action){

    switch(action.type){
        case 'Increment':
           return {count: state.count+1};
        case 'Decrement':
           return {count: state.count-1};
        case 'Reset':
            return {count:0}
        default:
            throw new Error('Unknown action type')
    }
}

function Counter(){
    const [state, dispatch] = useReducer(Reducer, initialState)
    return(
        <section>
            <article className='container'>
                <div className='col-12'>
                   <div className='info-center'>
                        <h1 className='text-center'>Welcome to the Reducer Function</h1>
                        <h2>Counter:{state.count}</h2>
                        <div className='d-flex gap-3'>
                            <button className='btn btn-primary' onClick={()=>dispatch({type: 'Increment'})}>Inc+</button>
                            <button className='btn btn-danger' onClick={()=>dispatch({type: 'Decrement'})}>Dec-</button>
                            <button className='btn btn-secondary' onClick={()=>dispatch({type:'Reset'})}>Reset---</button>
                        </div>
                   </div>
                </div>
            </article>
        </section>
    )
}

export default Counter
