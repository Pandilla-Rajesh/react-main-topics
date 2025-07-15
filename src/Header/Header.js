import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = ()=>{

  const [issticky, setIsSticky] = useState(false)

  useEffect(()=>{
   
    const scrollHandle=()=>{
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener('scroll', scrollHandle)

    return()=>{
      window.removeEventListener('scroll', scrollHandle)
    }

  },[])

    return(
      <nav className={`navbar navbar-expand-lg ${issticky ? 'sticky-head' : 'default-head'}`}>
        <article className='container-fluid'>
           <a href="#" className='navbar-brand'>Learn React</a>
           <button type='button' className='navbar-toggler' data-bs-target="#navMenu" data-bs-toggle="collapse"
           aria-expanded="false" aria-label='Toggle navigation' aria-controls='navMenu'>
            <span className='navbar-toggler-icon'></span>
           </button>
           <div className='collapse navbar-collapse justify-content-evenly' id='navMenu'>
              <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                   <Link className='nav-link' to='/home#homepage'>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/common#commonpage'>Common Page</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to="/props#propspage">Props</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to="/formik">Formik Forms</Link>
                </li>
                <li className='nav-item'>
                   <Link className='nav-link' to="/scroll#scrollpage">InfiniteScroll</Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to="/portal">ReactPortal</Link>
                </li>
              </ul>
                  <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                   <Link className='nav-link' to={{path:'home', hash:'#homepage'}}>Home</Link>
                </li>
              </ul>
           </div>
        </article>
      </nav>
    )
}

export default Header