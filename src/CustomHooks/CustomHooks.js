import React from 'react'

const CustomHooks = () => {

    return (
        <section>
            <article className=' container ms-auto mt-5'>
                <div className='row items-center gx-5 g-3'>
                    <div className="col-lg-7">
                        <div className='info-header'>
                            <h2 className=' uppercase text-6xl font-light mb-2'>
                                About <span className='block'>Custom Hooks</span>
                            </h2>
                            <p className='text-xl font-light'>No signup or authentication required. Start making API calls immediately.</p>
                        </div>
                        <div className='info-api-grid'>
                            <div className='row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 g-2 g-lg-3'>
                                <div className='col'>
                                    <div className=' text-center'>
                                        <div><i class="bi bi-building"></i></div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className=' text-center'>
                                        <div><i class="bi bi-building"></i></div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className=' text-center'>
                                        <div><i class="bi bi-building"></i></div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className=' text-center'>
                                        <div><i class="bi bi-building"></i></div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <img src={ require("../assets/images/login-img.webp") }
                            className=' rounded-s-3xl mb-6'
                            alt="image-title"
                            loading='lazy' />
                    </div>
                </div>
            </article>
        </section>
    )
}

export default CustomHooks