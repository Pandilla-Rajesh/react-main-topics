import React from 'react'
import Child from './Child'

const Parent=()=>{

    const data = {

        name: 'Rajesh Pandilla',
        message: 'Welcome to the parent componet',
        age:40,
        role:'SSE UI Developer',
        empid:202786

    }

    return(
        <section>
            <article className='container'>
                <div className='row g-0'>
                    <div className='col-auto'>
                        <Child data={data} />
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Parent