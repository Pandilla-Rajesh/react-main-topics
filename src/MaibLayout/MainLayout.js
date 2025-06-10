import Recat from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

function MainLayout() {

    return (
        <>
            {/* <h2>Welcome to main layout</h2> */}
            <header className='sticky-top'>
                <Header/>
            </header>
            <main>
                <Outlet />
            </main>
        </>

    )
}

export default MainLayout