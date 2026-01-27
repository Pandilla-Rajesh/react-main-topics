import Recat from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Footer from '../Pages/Footer/Footer'

function MainLayout() {

    return (
        <>
            {/* <h2>Welcome to main layout</h2> */ }
            <header className='sticky-top'>
                {/* <Header/> */ }
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>

    )
}

export default MainLayout