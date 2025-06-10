import React from 'react'
import Modal from './Modal'
import ModalPage from './ModalPage'

const ReactPortal=()=>{

    return(
       <section className='bg-gray'>
            <article className='container'>
                <div className='row'>
                    <div className='col my-4'>
                        <h1 className='text-center fs-1 text-primary fw-bold mb-3'>Welcome to the ReactPortal</h1>
                       <ModalPage/>
                    </div>
                </div>
            </article>
       </section>
    )
}
export default ReactPortal