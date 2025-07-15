import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  const [isopen, setIsOpen] = useState(false)

  return (
    <nav className='bg-slate-100 shadow-sm sticky top-[10vh] w-full z-50'>
      <div className='container mx-auto px-3 py-2 flex items-center justify-between'>
        <div className=' w-40'>
          <Link to="/">
            <img src={require('../assets/images/logoipsum-354.png')} className='' alt="cybercity-brand" />
          </Link>
        </div>
        <div className='md:hidden lg:hidden'>
          {/* menu */}
          <button onClick={() => setIsOpen(!isopen)} className='text-gray-700 focus:outline-none'>
            {isopen ?
              (<i class="bi bi-list"></i>) : (<i class="bi bi-list"></i>)
            }
          </button>
          {/* end */}
        </div>

        <div>

          {/* navigation-start */}

          <ul className={` visible md:flex md:items-center md:space-x-3 lg:space-x-3 lg:space-y-3 md:static absolute w-full
                md-w-auto transition duration-300 ease-in ${isopen ? 'top-16 opacity-100' : 'top-[-500px] opacity-100'}`}>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `block px-2 py-2 lg:space-x-3 lg:space-y-3 font-medium transition ease-in 
              ${isActive ? 'text-slate-50 bg-green-800 font-semibold px-3 rounded-lg' : 'hover:text-green-800'}`
              }
            >
              Home
            </NavLink>
            <li>
              <NavLink to="/common"
                className={({ isActive }) => `block px-2 py-2 font-medium transition ease-in 
              ${isActive ? 'text-slate-50 bg-green-800 font-semibold px-3 rounded-lg' : 'hover:text-green-800'}`}>
                CommonPage
              </NavLink>
            </li>
            <li>
              <NavLink to="/apicalls" className='block px-2 py-2 text-slate-700 hover:text-green-800 
              font-medium transition ease-in delay-300'>
                APICalls
              </NavLink>
            </li>
            <li>
              <NavLink to="/props" className='block px-2 py-2 text-slate-700 hover:text-green-800 font-medium transition
              ease-in-out'>Props</NavLink>
            </li>
            <li>
              <NavLink to="/formik" className='block px-2 py-2 text-slate-700 hover:text-green-800 font-medium transition
              ease-in-out'>Formik</NavLink>
            </li>
              <NavLink to="/reacthooks" className={({isActive})=> `block lg:space-x-3 lg:space-y-3 px-2 py-2 transition ease-in font-medium
              ${isActive ? "text-slate-50 bg-green-800 px-3 rounded-lg" : "hover:text-green"}`}>
                ReactHooks
              </NavLink>
            <li>
              <NavLink to="/scroll" className='block px-2 py-2 text-slate-700 hover:text-green-800 font-medium transition
              ease-in-out'>InfiniteScroll</NavLink>
            </li>
            <li>
              <NavLink to="/portal" className='block px-2 py-2 text-slate-700 hover:text-green-800 font-medium transition
              ease-in-out'>React Portals</NavLink>
            </li>
            <li>
              <NavLink to="/todolist" className='block px-2 py-2 text-slate-700 hover:text-green-800 font-medium transition
              ease-in-out'>HOC</NavLink>
            </li>
          </ul>

          {/* end */}
        </div>

      </div>
    </nav>
  )
}

export default Navbar