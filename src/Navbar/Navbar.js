import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../ContextMain';
import { Container } from 'react-bootstrap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (

    <>
      {/* <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img src={ require('../assets/images/react-brand.png') } />
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar> */}
      <nav className={ `shadow-xl top-[0] sticky z-[100] border border-slate-200/50 glass-nav
      ${theme === 'dark' ? 'text-white' : 'text-black'}` }>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

          <div className=' flex justify-between items-center h-24'>
            {/* Logo */ }
            <div className=' flex items-center gap-2'>
              <Link to="/" className=' flex items-center group gap-2'>
                <img src={ require('../assets/images/react_brand.webp') } alt="react-allin-one-logo"
                  className='w-auto object-contain h-20 group-hover:scale-105 transition-transform' />
              </Link>
              <form>

              </form>
            </div>

            {/* Mobile Toggle */ }
            <div className='md:hidden'>
              <button onClick={ () => setIsOpen(!isOpen) } className='text-2xl focus:outline-none'>
                { isOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i> }
              </button>
            </div>

            {/* Navigation */ }
            <div className={ `absolute md:static top-16 left-0 md:w-auto md:bg-transparent 
        transition-all duration-300 ease-in z-4 ms-auto
                        ${isOpen ? 'flex' : 'hidden'} lg:flex md:flex w-full` }>
              <ul className='md:flex md:items-center space-y-0 md:space-y-0
           mx-auto md:space-x-0 p-0 md:p-0 me-2 sm:bg-white lg:bg-transparent gap-3'>
                { [
                  { to: '/home', label: 'Home' },
                  { to: '/common', label: 'CommonPage' },
                  { to: '/apicalls', label: 'APICalls' },
                  { to: '/customhooks', label: 'CustomHooks' },
                  { to: '/props', label: 'Props' },
                  { to: '/formik', label: 'Formik' },
                  { to: '/reacthooks', label: 'ReactHooks' },
                  { to: '/scroll', label: 'InfiniteScroll' },
                  { to: '/portal', label: 'React Portals' },
                  { to: '/todolist', label: 'HOC' }
                ].map((item) => (
                  <li key={ item.to }>
                    <NavLink
                      to={ item.to }
                      className={ ({ isActive }) =>
                        `text-xs text-slate-600 font-semibold uppercase hover:text-blue-600 
                      transition-colors
                  ${isActive ? 'bg-green-600 text-sm text-white px-2.5 py-2.5 hover:bg-blue-800 rounded-xl font-bold' : ''}`
                      }
                    >
                      { item.label }
                    </NavLink>
                  </li>
                )) }
              </ul>

              {/* Theme Toggle Button */ }
              <ul className='mt-2 md:mt-0 md:ml-4 flex items-center'>
                <button
                  onClick={ () => setTheme(theme === 'light' ? 'dark' : 'light') }
                  className={ `text-xl ${theme === 'light'
                    ? 'text-white bg-slate-900 px-3 py-2 rounded-xl hover:bg-green-600'
                    : 'hover:bg-green-600'
                    }` }
                >
                  { theme === 'light' ? <i class="bi bi-brightness-low"></i> : <i class="bi bi-moon"></i> }
                </button>
              </ul>
            </div>
          </div>

        </div>
      </nav>
    </>



  );
};

export default Navbar;
