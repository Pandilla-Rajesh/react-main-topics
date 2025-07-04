import React, { useState } from 'react'
import Modal from './Modal'
import Toast from './Toast'
import ToolTip from './ToolTip'

const ModalPage = () => {

    const [open, setOpen] = useState(false)
    const [showToast, setShowToast] = useState(false)

    return (
        <section>
            <article className='container'>
                <div className='row'>
                    <div className='col border border-secondary p-3 rounded-3 text-center'>
                        <h2 className='mb-3 fw-semibold text-warning'>Multiple React Portal Modal Example</h2>
                        <div className=''>
                            <button className='bg-danger rounded border border-0 px-3 py-2 text-white' onClick={() => 
                            setOpen(true)}>
                            Open Modal
                        </button>
                        <button className='btn btn-success text-white' onClick={()=>setShowToast(true)}>
                            Show Toast
                        </button>
                        </div>
                        <Modal isOpen={open} onClose={() => setOpen(false)}>
                            <h2>Hello from Modal!</h2>
                            <p>This content is rendered using a portal.</p>
                        </Modal>
                        {showToast && (
                            <Toast message="This is a toast message!" onClose={()=>setShowToast(false)} />
                        )}
                        <ToolTip content="I am a Tooltip">
                            <button className='btn btn-primary'>Hover me Tooltip</button>
                        </ToolTip>
                    </div>
                </div>
            </article>
        </section>
    )
}
export default ModalPage