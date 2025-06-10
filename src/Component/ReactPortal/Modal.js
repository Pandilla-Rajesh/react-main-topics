import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ isOpen, onClose, children }) => {

    if (!isOpen) return null

    return ReactDOM.createPortal(
        // modal-popup //

        <div className='modal-overlay' onClick={onClose}>
            <div className='modal-dialog'>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <div className='modal-header'>
                        <button className='close-button' onClick={onClose}>&times;</button>
                    </div>
                    <div className='modal-body'>
                        {children}
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modal-root')
        // end //
        
    )
}


export default Modal