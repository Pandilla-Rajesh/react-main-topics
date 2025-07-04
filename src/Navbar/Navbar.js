import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [isopen, setIsOpen] = useState(false)

  return (
    <nav className='bg-slate-100 shadow-sm sticky top-[10vh] w-full z-50'>
      <div className='container mx-auto px-3 py-2 flex items-center justify-between'>
        <div className=' w-16'>
          <Link to="/">
            <img src={require('../assets/images/20yrs_logo.png')} className='' alt="cybercity-brand" />
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

          <ul className={` visible md:flex md:items-center md:space-x-6 md:static absolute w-full
                md-w-auto transition duration-300 ease-in ${isopen ? 'top-16 opacity-100' : 'top-[-500px] opacity-100'}`}>
            <li>
              <Link to="/home" className='block px-2 py-2 text-slate-700 hover:text-green-800 transition ease-in
               font-medium'>
                Home
              </Link>
            </li>
            <li>
              <Link to="/common" className='block px-2 py-2 text-slate-700 hover:text-green-800 transition ease-in font-medium'>
                CommonPage
              </Link>
            </li>
            <li>
              <Link to="/apicalls" className='block px-2 py-2 text-slate-700 hover:text-green-800 
              font-medium transition ease-in delay-300'>
                APICalls
              </Link>
            </li>
          </ul>

          {/* end */}
        </div>

      </div>
    </nav>
  )
}

export default Navbar