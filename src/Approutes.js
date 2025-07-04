import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Component/Login/Login'

const MainLayout = React.lazy(()=>import('./MaibLayout/MainLayout'))
const Home = React.lazy(()=>import('./Pages/Home/Home'))
const CommonPage = React.lazy(()=>import('./Pages/CommonPage/CommonPage'))
const APICalls = React.lazy(()=>import('./Component/APICalls/APICalls'))
const Props = React.lazy(()=>import('./Component/Props/Props'))
const Formik = React.lazy(()=>import('./Component/Formik/Formik'))
const InfiniteScroll = React.lazy(()=>import('./Component/InfiniteScroll/InfiniteScroll'))
const ReactPortal = React.lazy(()=>import('./Component/ReactPortal/ReactPortal'))

function Approutes(){

    const router = createBrowserRouter([

        {index:true, element:<Suspense fallback={<div>...Loading</div>}><Login/></Suspense>},
        {path:'login', element:<Suspense fallback={<div>...Loading</div>}><Login/></Suspense>},
        {path:'/', element:(<Suspense fallback={<div>...Loading</div>}><MainLayout/></Suspense>),
    
        children:[

            // {index:true, element:(<Suspense fallback={<div>...Loading</div>}><Home/></Suspense>)},
            {path:'home', element:(<Suspense fallback={<div>...Loading</div>}><Home/></Suspense>)},
            {path:'common', element:(<Suspense fallback={<div>...Loading</div>}><CommonPage/></Suspense>)},
            {path:'apicalls', element:(<Suspense fallback={<div>...Loading</div>}><APICalls/></Suspense>)},
            {path:'props', element:(<Suspense fallback={<div>...Loading</div>}><Props/></Suspense>)},
            {path:'formik', element:(<Suspense fallback={<div>...Loading</div>}><Formik/></Suspense>)},
            {path:'scroll', element:(<Suspense fallback={<div>...Loading</div>}><InfiniteScroll/></Suspense>)},
            {path:'portal', element:(<Suspense fallback={<div>...Loading</div>}><ReactPortal/></Suspense>)}
        ]
    }
    ])
    return(<Suspense fallback={<div>...Loading</div>}><RouterProvider router={router}></RouterProvider></Suspense>)
}

export default Approutes