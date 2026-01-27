import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TodoList from './Component/TodoList/TodoList'

const Login = lazy(() => import('./Component/Login/Login'))
const MainLayout = React.lazy(() => import('./MaibLayout/MainLayout'))
const Home = React.lazy(() => import('./Pages/Home/Home'))
const CommonPage = React.lazy(() => import('./Pages/CommonPage/CommonPage'))
const APICalls = React.lazy(() => import('./Component/APICalls/APICalls'))
const CustomHooks = lazy(() => import('./CustomHooks/CustomHooks'))
const Props = React.lazy(() => import('./Component/Props/Props'))
const Formik = React.lazy(() => import('./Component/Formik/Formik'))
const ReactHooks = React.lazy(() => import('./Component/ReactHooks/ReactHooks'))
const InfiniteScroll = React.lazy(() => import('./Component/InfiniteScroll/InfiniteScroll'))
const ReactPortal = React.lazy(() => import('./Component/ReactPortal/ReactPortal'))
const NoPage = lazy(() => import('./NoPage'))

function Approutes() {

    const router = createBrowserRouter([

        { index: true, element: <Suspense fallback={ <div>...Loading</div> }><Login /></Suspense> },
        { path: 'login', element: <Suspense fallback={ <div>...Loading</div> }><Login /></Suspense> },
        {
            path: '/', element: (<Suspense fallback={ <div>...Loading</div> }><MainLayout /></Suspense>),
            children: [

                // {index:true, element:(<Suspense fallback={<div>...Loading</div>}><Home/></Suspense>)},
                { path: 'home', element: (<Suspense fallback={ <div>...Loading</div> }><Home /></Suspense>) },
                { path: 'common', element: (<Suspense fallback={ <div>...Loading</div> }><CommonPage /></Suspense>) },
                { path: 'apicalls', element: (<Suspense fallback={ <div>...Loading</div> }><APICalls /></Suspense>) },
                { path: 'customhooks', element: (<Suspense fallback={ <div>...Loading</div> }><CustomHooks /></Suspense>) },
                { path: 'props', element: (<Suspense fallback={ <div>...Loading</div> }><Props /></Suspense>) },
                { path: 'formik', element: (<Suspense fallback={ <div>...Loading</div> }><Formik /></Suspense>) },
                { path: 'reacthooks', element: (<Suspense fallback={ <div>...Loading</div> }><ReactHooks /></Suspense>) },
                { path: 'scroll', element: (<Suspense fallback={ <div>...Loading</div> }><InfiniteScroll /></Suspense>) },
                { path: 'portal', element: (<Suspense fallback={ <div>...Loading</div> }><ReactPortal /></Suspense>) },
                { path: 'todolist', element: (<Suspense fallback={ <div>...Loading</div> }><TodoList /></Suspense>) },
                { path: '*', element: (<Suspense fallback={ <div>...Loading</div> }><NoPage /></Suspense>) }
            ]
        }
    ])
    return (<Suspense fallback={ <div>...Loading</div> }>
        <RouterProvider router={ router }></RouterProvider></Suspense>)
}

export default Approutes