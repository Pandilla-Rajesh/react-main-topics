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
      <nav className={ `shadow-xl sticky top-[10vh] w-full z-50 navbar navbar-expand-lg p-0
      ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-slate-100 text-black'}` }>
        <div className=' container w-full me-auto px-3 py-0 flex items-center justify-end'>

          {/* Logo */ }
          <div className='w-40'>
            <Link to="/">
              <img src={ require('../assets/images/logoipsum-354.png') } alt="cybercity-brand"
                className='w-full h-auto' />
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
           mx-auto md:space-x-0 p-0 md:p-0 me-2 sm:bg-white lg:bg-transparent'>
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
                      `block px-2 py-3 rounded-0 transition font-medium text-sm text-slate-800
                  ${isActive ? 'bg-green-700 text-white' : 'hover:text-green-700'}`
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
                className={ `text-sm px-3 py-3 text-xl  ${theme === 'light'
                  ? 'text-white bg-sky-600 hover:bg-gray-200'
                  : ' bg-orange-400 border-slate-700 text-white  hover:bg-orange-700'
                  }` }
              >
                { theme === 'light' ? <i class="bi bi-brightness-low"></i> : <i class="bi bi-moon"></i> }
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>



  );
};

export default Navbar;
