import React from 'react'

function NoPage() {
    return (
        <section className=' relative h-screen w-full overflow-hidden'>
            <div>
                <img src={ require('./assets/images/nodata-image.png') } alt="no-data-found"
                    loading='lazy' className='w-full object-fit-cover' />
            </div>
        </section>
    )
}

export default NoPage
