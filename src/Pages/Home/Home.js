import React, { useEffect, useState } from 'react'
import Greeting from '../../Component/Greeting/Greeting'

function Home({name}){

    const [count, setCount] = useState(0)

    useEffect(()=>{
        setCount((prev) => prev+0)
    }, [count])//Avoiding rerender loops//

    return(
        <section className='p-3'>
            <article className='container'>
                 <h1>Welcome to the Home Component</h1>
                
            <h2>Hello{name}</h2>
            <h3>Count:{count}</h3>
            <button className='btn btn-primary p-3' onClick={()=>setCount(count+1)}>count</button>
            <Greeting name="Ushasri pandilla"/>
            </article>
        </section>
    )
}

export default Home