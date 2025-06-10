import React from 'react'

const Child = (props)=>{

    const {message, age, name, role, empid} = props.data

    return(
        <section>
            <article className='container'>
                <div className='row g-0'>
                    <div className='col d-flex flex-wrap flex-column border p-3 rounded-3'>
                        <h1>Name: {name}</h1>
                        <h4>Message: {message}</h4>
                        <h3>Age: {age}</h3>
                        <div className='d-flex align-items-center justify-content-between'>
                            <p>Role: {role}</p>
                            <p>Employee Id: {empid}</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Child