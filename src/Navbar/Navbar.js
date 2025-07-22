import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../ContextMain';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className={`shadow-sm sticky top-[10vh] w-full z-50 ${theme === 'dark' ? 
    'bg-gray-800 text-white' : 'bg-slate-100 text-black'}`}>
      <div className='container mx-auto px-3 py-2 flex items-center justify-between'>

        {/* Logo */}
        <div className='w-40'>
          <Link to="/">
            <img src={require('../assets/images/logoipsum-354.png')} alt="cybercity-brand" className='w-full h-auto' />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-2xl focus:outline-none'>
            {isOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
          </button>
        </div>

        {/* Navigation */}
        <div className={`absolute md:static top-16 left-0 md:w-auto md:bg-transparent 
        transition-all duration-300 ease-in z-4 mx-auto
                        ${isOpen ? 'flex' : 'hidden'} lg:flex md:flex w-full bg-white flex-col`}>
          <ul className='md:flex md:items-center space-y-0 md:space-y-0
           mx-auto md:space-x-0 p-2 md:p-0 sm:bg-white'>
            {[
              { to: '/home', label: 'Home' },
              { to: '/common', label: 'CommonPage' },
              { to: '/apicalls', label: 'APICalls' },
              { to: '/props', label: 'Props' },
              { to: '/formik', label: 'Formik' },
              { to: '/reacthooks', label: 'ReactHooks' },
              { to: '/scroll', label: 'InfiniteScroll' },
              { to: '/portal', label: 'React Portals' },
              { to: '/todolist', label: 'HOC' }
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md transition font-medium ${
                      isActive
                        ? 'bg-green-700 text-white'
                        : 'text-slate-700 hover:text-green-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <ul className='mt-2 md:mt-0 md:ml-4 flex items-center'>
              <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className={`text-sm px-4 py-2 rounded-md border ${
                theme === 'light'
                  ? 'bg-white text-black border-gray-300 hover:bg-gray-200'
                  : 'bg-gray-900 text-white border-gray-700 hover:bg-gray-700'
              }`}
            >
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
