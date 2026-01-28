import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (

        <footer className='bg-slate-800 border-t border-slate-900 pt-8 pb-8 mt-auto text-slate-400'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

                <div className='flex items-center justify-center gap-4 mb-4 relative '>

                    <span className='w-12 h-[1px] bg-gray-400'></span>
                    <h2 className='text-white uppercase text-3xl mb-0 
                        font-semibold tracking-widest'>get in touch</h2>
                    <span className='w-12 h-[1px] bg-gray-400'></span>

                </div>

                {/* quick-links */ }

                <div className='flex items-center justify-center'>
                    {/* links-heading */ }
                    <h3 className=' uppercase text-xl text-slate-300 tracking-wider mb-3'>quick links</h3>
                    {/* end */ }

                </div>

                <div className='max-w-3xl mx-auto'>
                    <div className=' flex flex-wrap justify-center gap-3 gap-3'>
                        { [
                            'Home',
                            'Common Page',
                            'API Calls',
                            'Custom Hooks',
                            'Props',
                            'FormiK',
                            'React Hooks',
                            'InfinitiScroll',
                            'React Portals',
                            'HOC'
                        ].map((item, index) => (
                            <button key={ index }
                                className='px-6 py-2 rounded-xl bg-slate-50
                            text-gray-700 text-sm uppercase hover:bg-blue-700 transition-colors'>
                                { item }
                            </button>
                        )) }
                    </div>
                </div>

                {/* end */ }


                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 gap-6 mb-12'>
                    <div className='col-span-1'>
                        <div>
                            <img src={ require('../../assets/images/react_brand.webp') }
                                className='w-auto h-20' alt="react-brand" loading='lazy' />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer