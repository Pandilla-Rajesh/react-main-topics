import React, { useEffect, useRef, useState } from 'react'

const InfiniteScroll=()=>{

    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const observerRef = useRef()
    
    const fetchUsers=async()=>{
        
        setLoading(true)
        const response = await fetch(`https://dummyjson.com/users?limit=5&skip=${(page-1)*10}`)
        const data = await response.json()
        // setUsers(data.users)
        setUsers((prev) => [...prev, ...data.users])
        setLoading(false)
        console.log(data.users, 'user data display')
    }
    
    useEffect(()=>{
        fetchUsers()
    }, [page])

    useEffect(()=>{

        const observer = new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    setPage((prev) => prev+1)
                }
            },
            {threshold:1.0}
        );
         if(observerRef.current) observer.observe(observerRef.current)
            return () => observer.disconnect()
    }, [])

    return(
        <section>
            <article className='container'>
                <div className='row'>
                    <div className='col'>
                        <h1 className='fs-3 text-center my-4 fw-semibold'>Welcome to the InfiniteScroll</h1>
                    </div>

                    <div className='table-responsive'>
                        <table className='table table-bordered'>
                            <thead className='bg-primary'>
                                <tr key="">
                                    <th>Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.length >0 ?(users.slice()?.map((user, index)=>(
                                    <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.phone}</td>
                                </tr>
                                ))):(
                                    <>
                                       <tr key="">
                                        <td colSpan="6" className='text-center'>Loading the data...</td>
                                       </tr>
                                    </>
                                )}
                               
                            </tbody>
                        </table>
                         <div ref={observerRef} className='text-center'>
                            {loading && <p>Loading...</p>}
                        </div>
                    </div>
                    
                    <div className='bg-info-subtle p-5 rounded-3 border border-2 mb-4'>
                        <div id='scrollpage'>
                            <h3 className='fs-2 text-center'>Welcome to the page id</h3>
                        </div>
                    </div>

                </div>
            </article>
        </section>
    )
}
export default InfiniteScroll