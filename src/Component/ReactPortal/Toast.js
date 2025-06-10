import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

const Toast = ({ message, duration = 2000, onClose }) => {

    useEffect(() => {

        const timer = setTimeout(duration, onClose)
        console.log(timer)
        return () => clearTimeout(timer)
    }, [onClose, duration])

    return ReactDOM.createPortal(
        <div className='toast-wrapper'>
            {message}
        </div>,
        document.getElementById('toast-root')
    )
}
export default Toast