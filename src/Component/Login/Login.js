import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [login, setLogin] = useState({
        userName: '',
        password: ''
    })

    const navigate = useNavigate()

    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    const [showpassword, setShowPassword] = useState(false)

    const toggleVisible=()=>{
        setShowPassword(!showpassword)
    }

    const handleChange = (e) => {
        setLoading(true)
        const { name, value } = e.target
        setLogin({ ...login, [name]: value })
        console.log(login, 'details fetched')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(JSON.stringify(login, null, 1))
        const errors = {}

        if(!login.userName.trim()){
            errors.userName = 'please enter username'
        }else if(!/^[a-zA-Z0-9@.]+$/.test(login.userName)){
            errors.userName = 'user name contains number letters'
        }else if(login.userName.length<10){
            errors.userName = 'please enter 10 characters'
        }

        if (!login.password.trim()) {
            errors.password = 'Please enter password'
        } else if (login.password.length < 10) {
            errors.password = 'Please enter password must 10 characters'
        }

        if (Object.keys(errors).length === 0) {
            navigate('/home')
        } else {
            setError(errors)
        }
        setLogin({userName:'', password:''})
    }

    return (
        <section className='bg-gradient-to-tr from-green-800 to-lime-700 h-full'>
            <article className='container ms-auto'>
                <div className=' flex justify-center items-center py-4'>
                    <div className=' grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-dvh 
                     max-w-full shadow-lg hover:shadow-lg translate-xl rounded-lg overflow-hidden'>
                        <div className='bg-slate-100 p-7 flex items-start justify-center flex-col'>
                            {/* logo--section */}
                            <div className='flex items-center gap-3 mb-0'>
                                <div className='w-56'>
                                    <img src={require('../../assets/images/logoipsum-354.png')} alt='brand' />
                                </div>
                                {/* <div className=''>
                                    <h2 className='lg:text-5xl bg-gradient-to-tr from-green-600 to-black
                                    bg-clip-text text-transparent font-extrabold uppercase'>Cybercity</h2>
                                </div> */}
                            </div>
                            {/* end */}

                            {/* login-details */}

                            <div className='flex justify-center items-start gap-8 flex-col'>

                                <div className=''>
                                    <h1 className='lg:text-4xl text-green-800 font-bold mb-0
                                     first-letter:text-9xl first-letter:text-green-950 lowercase'>
                                        Welcome to Lorem University</h1>
                                    <p className=' text-gray-800 text-md font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                </div>

                                <form className='w-full flex gap-3 flex-col' onSubmit={handleSubmit}>
                                    <div className='w-full'>
                                        <label className='block'>
                                            <span className='after:content-[*] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700'>
                                                Email
                                            </span>
                                            <input type="email" name='userName' className={`mt-1 px-2 py-2 text-sm border border-slate-700 shadow-sm 
                                        focus:outline-none focus:border-sky-800 focus:ring-sky-800 rounded-md w-full 
                                        ${error.userName ? 'border-red-500 ring ring-red-500' : 'border-gray-500'}`} 
                                        minLength={6} maxLength={20}
                                                placeholder='you@example.com' value={login.userName} onChange={handleChange} />
                                        <p>{error.userName && <small className='text-sm text-red-600'>{error.userName}</small>}</p>
                                        </label>
                                    </div>

                                    <div className='w-full'>
                                        <label className='block'>
                                            <span className='after:content-[*] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700'>
                                                Password
                                            </span>
                                           <div className=' group block'>
                                              <div className=' flex items-center relative w-full'>
                                                 <input type={showpassword ? 'text' : 'password'} name='password' 
                                                 className='mt-1 px-2 py-2 text-sm border border-slate-700 shadow-sm 
                                        focus:outline-none focus:border-sky-800 focus:ring-sky-800 rounded-md w-full'
                                         minLength={6} maxLength={10} 
                                                placeholder='Please enter password' value={login.password} onChange={handleChange} />
                                                <span onClick={toggleVisible} className=' absolute right-3 top-1/2 text-slate-600 cursor-pointer 
                                                -translate-y-1/2'>
                                                    {showpassword ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>}
                                                </span>
                                              </div>
                                           </div>
                                        <p>{error.password && <small className='text-sm text-red-500'>{error.password}</small>}</p>
                                        </label>
                                    </div>

                                    <div className='flex justify-between items-center'>
                                        <fieldset>
                                            <input type="checkbox" className=' peer/draft border border-slate-500 me-2' name='remember'
                                                id='remember' />
                                            <label for="remember" className='peer/checked/draft:text-sky-600'>Remember me</label>
                                        </fieldset>
                                        <div>
                                            <Link className='text-green-700 text-sm font-medium hover:text-green-900
                                              transition-all ease-in-out delay-300'>Forgot Password</Link>
                                        </div>
                                      
                                    </div>

                                    <article className='flex items-center justify-start gap-4'>
                                        <button type='submit' value="submit" className='bg-gradient-to-tr from-green-500
                                     to-green-900 px-8 py-2 text-slate-50 border-2 border-green-950 shadow-sm 
                                     font-bold hover:bg-green-800'>
                                            Login
                                        </button>
                                        <button className='border-2 border-slate-600 shadow-sm text-sm px-8 py-2 uppercase font-bold'>
                                            sign up
                                        </button>
                                    </article>

                                </form>

                            </div>

                            {/* end */}

                        </div>
                        <div className='bg-green-400 bg-gradient-to-tr from-green-600 to-green-900 '>
                            <div className=' flex items-center justify-center h-dvh'>
                                <img src={require('../../assets/images/login_new_img.png')}
                                    className='w-full h-full object-cover' alt='login-image' />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}
export default Login