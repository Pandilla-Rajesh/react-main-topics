import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./counterSlice"

const Counter = ()=>{
    
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

    return(
        <>
        <h2>{count}</h2>
        <div className="flex gap-3">
            <button className="border rounded px-3 py-2 bg-blue-900 text-slate-100" onClick={()=> dispatch((increment()))}>Increment</button>
            <button className="border rounded px-3 py-2 bg-red-800 text-slate-100" onClick={()=>dispatch((decrement()))}>Decrement</button>
            <button className="border rounded px-3 py-2 bg-green-700 text-slate-100" onClick={()=>dispatch((reset()))}>Reset</button>
        </div>
        </>
    )

}

export default Counter