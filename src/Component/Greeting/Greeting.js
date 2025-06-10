import React, { useEffect, useState } from 'react'

function Greeting(props){
    // return(
    //     <>
    //         <h1>Hello, {props.name}</h1>
    //         <p>Welcome to React with JSX</p>
    //         'div',
    //         {className: "greet"},
    //         React.createElement('h2', null, `Hello, ${props.name}!`),
    //         React.createElement('p', null, 'This is React without JSX.')
    //     </>
    // )

    return React.createElement(
        'div',
        {className : 'Greet'},
        React.createElement('h2', null, `Hello ${props.name}`),
        React.createElement('p', null, 'this is for without JSX'),

        <ChildComponent 
        name="Pandilla Ushasri" age="35" phone="1234546789" email="raj@gmail.com" role="SSE UI Developer"/>
    )
}

function ChildComponent({name, age, phone, email, role}){
    
    return(
        <section className='bg-primary p-5 rounded-3'>
            <article className='container g-0'>
                <div className='row'>
                    <div className='p-3 bg-white rounded-3'>
                        <div className=''>
                            <h1 className='text-dark text-center fw-bold mb-3'>Welcome to ChildComponent Data Binding</h1>
                            <div className='col-4 border border-1 p-3 rounded-2'>
                                <h2 className='text-left fw-semibold text-primary border-bottom pb-2'>Name: {name}</h2>
                                 <div className='d-flex flex-wrap gap-3 align-items-center justify-content-between'>
                                    <h3>Age: {age}</h3>
                                    <h4>Phone: {phone}</h4>
                                    <p>Email:{email}</p>
                                    <p>Role: {role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Greeting