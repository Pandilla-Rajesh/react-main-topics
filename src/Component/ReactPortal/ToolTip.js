import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'

const ToolTip=({children, content}) =>{

    const [coords, setCoords] = useState({top:0, left:0})
    const [visible, setVisible] = useState(false)
    const ref = useRef(null)

    const showTooltip=()=>{

        if(!ref.current) return

        const rect = ref.current.getBoundingClientRect()
        setCoords({

            top: rect.top + window.scrollY - 40,
            left: rect.left + rect.width/2
        })
        setVisible(true)
    }

    const hideTooltip=()=>setVisible(false)

    return(
        <section>
            <article className='container'>
                <div className='row'>
                    <div className='col p-5'>
                        <div ref={ref} onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
                            <p>{children}</p>
                        </div>
{visible &&
        ReactDOM.createPortal(
          <div
            style={{
              position: 'absolute',
              top: coords.top,
              left: coords.left,
              transform: 'translateX(-50%)',
              background: '#333',
              color: '#fff',
              padding: '8px 12px',
              borderRadius: '4px',
              pointerEvents: 'none',
              zIndex: 9999,
            }}
          >
            {content}
          </div>,
          document.body
        )}
                    </div>
                </div>
            </article>
        </section>
    )
}

export default ToolTip