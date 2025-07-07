import React from 'react'

const Formik=()=>{

    return(

        <section className=' bg-gradient-to-tr from-green-800 to-green-950 p-6'>
            <article className='container ms-auto'>
                <div className=' flex items-center justify-center flex-column'>
                    
                    {/* heading */}
                    <div>
                        <h1 className='text-4xl text-slate-50 font-medium mb-2'>
                            User Registartion
                        </h1>
                        <p className='text-xl text-slate-100 font-normal text-center'>
                            With using formik and tailwindcss
                        </p>
                    </div>
                    {/* end */}

                   <div className='w-full'>
                        <form className='col-span-3 grid grid-cols-3 gap-3 w-full'>
                        
                        <div className='w-full'>
                            <input type="text" name='firstname' value='' 
                             className='mt-2 px-2 py-2 text-sm border w-full border-slate-700 shadow-lg rounded'
                            placeholder='First Name' />
                        </div>

                        <div className='block'>
                            <input type="text" name='lastname' value="" 
                            className='mt-2 px-2 py-2 text-sm border border-slate-700 shadow-lg w-full rounded'
                            placeholder='Lastname'/>
                        </div>

                        <div className='block'>
                            <input type="text" name='email' value='' 
                            className='mt-2 px-2 py-2 text-sm border border-slate-700 shadow-lg rounded w-full'
                           placeholder='Email' />
                        </div>
                       
                    </form>
                   </div>

                </div>
            </article>
        </section>
    )
}

export default Formik