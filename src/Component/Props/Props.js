import React from 'react'
import Child from './Child'
import Parent from './Parent'

const Props=()=>{

const data ={

    message: 'Hello I am Parent Component'
}

    return(
        <section className='bg-info p-3'>
            <article className='container'>
                <div className='row'>
                    <div className='bg-grey p-2'>
                        <h1 className='text-center fw-bold mb-5'>Welcome to the Props Component</h1>
                        {/* <Child data={data} /> */}
                        <Parent/>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Props