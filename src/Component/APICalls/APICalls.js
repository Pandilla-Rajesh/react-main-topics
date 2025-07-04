import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Value } from 'sass'

function APICalls(){

    // get-call-for-axios //

    const [data, setData] = useState([])
    const [users, setUsers] = useState([])
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    // axios-api-call //
    const fetchData = async()=>{
        setLoading(true)
        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(res.data)
            console.log(res.data, 'data fetch the api get data')
        }catch(err){
            console.log(err);
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])

    // end //

    // promise based fetch api call //

    const userGet=async()=>{
        setLoading(true)
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const response = await res.json()
            setUsers(response)
            console.log(response, 'user details')
            console.table(response)
            response.forEach((user, index)=>{
                console.log(`User ${index+1}:`, user)
            })
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        userGet()
    }, [])

    // end //

    // react hook api call //

        useEffect(()=>{
            setLoading(true)
            fetch('https://dummyjson.com/products').then((res) => res.json())
            .then(res=>{
                setProduct(res.products)
                console.log(res.products, 'product the data')
                console.table(res.products)
                res.forEach((data, index)=>{
                    console.log(`Product ${index+1}`, data)
                })
            }).catch(err=>{
                console.log(err)
            })
        }, [])

    // end //

    // 

    return(
       <section className='py-6'>
          <article className=' container ms-auto'>
              <div className='flex items-center justify-center flex-col gap-4'>
                  <div className='grid grid-cols-1 mb-2'>
                      <h1 className='text-3xl md:text-4xl lg:text-4xl font-bold bg-gradient-to-tr from-green-600 
                   to-pink-700 text-transparent bg-clip-text'>Welcome To The API Calls for HTTP Methods</h1>
                  </div>
              </div>

                {/* axios-get-call */}

                  <div className='grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 mb-4 gap-3'>
                    {loading ? (
                        <p>...Loading</p>
                    ) : (
                        data?.length > 0 ? (
                            data?.slice(0, 3)?.map((list,index)=>(
                                <div className='info-card'>
                                    <div className='card' key={index}>
                                        <div>
                                            <img src={require('../../assets/images/Shot23_Cybercity.jpg')} alt="image" />
                                        </div>
                                       <div className='card-header'>
                                          <h2 className='text-2xl bg-gradient-to-tr from-orange-400 to-orange-950
                                           bg-clip-text text-transparent font-bold'>AXIOS API Call</h2>
                                          <div className='card-title'>
                                             <h2 className='m-0'>Title:</h2>
                                            <h3 className='m-0 text-blue-800'>{list.title}</h3>
                                          </div>
                                       </div>
                                       <div className='card-body'>
                                           <div className='info-data'>
                                               <div>
                                                  <h4>Id: {list.id}</h4>
                                               </div>
                                               <div>
                                                 <h4>UserId: {list.userId}</h4>
                                               </div>
                                           </div>
                                           <h5>Body:</h5>
                                           <p className='card-text'>{list.body}</p>
                                       </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No Data Found</p>
                        )
                    )}
                  </div>

                {/* end */}
                
                {/* API Call with async fetch await */}
                    {loading ? (
                        <p>...Loading</p>
                    ) : (
                       <div className=' relative overflow-x-auto'>
                           <table className='table-fixed text-xs border text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full'>
                            <thead className='text-xs border  text-gray-50 dark:text-gray-100 uppercase font-normal bg-gray-600'>
                                <tr>
                                    <th scope='col' className='px-6 py-3'>id</th>
                                    <th scope='col' className='px-6 py-3'>Name</th>
                                    <th scope='col' className='px-6 py-3'>UserName</th>
                                    <th scope='col' className='px-6 py-3'>Email</th>
                                    <th scope='col' className='px-6 py-3'>Address</th>
                                    <th scope='col' className='px-6 py-3'>Phone</th>
                                    <th scope='col' className='px-6 py-3'>Website</th>
                                    <th scope='col' className='px-6 py-3'>Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.length > 0 ? (
                                    users.slice(0, 3)?.map((user, id) => (
                                        <tr key={id} className='border-b dark:border-gray-700'>
                                            <td className='px-6 py-2'>{user.id}</td>
                                            <td className='px-6 py-2 text-sm text-indigo-800'>{user.name}</td>
                                            <td className='px-6 py-2 text-sm text-yellow-900'>{user.username}</td>
                                            <td className='px-6 py-2 text-sm text-red-950'>{user.email}</td>
                                            <td className='px-6 py-2 text-sm text-red-950'>
                                                <ul>
                                                    {/* {Object.keys(user.address)?.map((loc)=>(
                                                        <li key={loc}>
                                                            {typeof user.address[loc] == 'object' ? JSON.stringify(user.address[loc]): user.address[loc]}
                                                        </li>
                                                    ))} */}
                                                    {users.map((user, index)=>(
                                                        <li key={index}>
                                                            <strong className='text-sm text-slate-700'>Address:</strong>
                                                            <p>{user.address.street}</p>
                                                            <strong className='text-slate-700 text-sm'>City</strong>
                                                            <p>{user.address.city}</p>
                                                            <strong className='text-slate-700 text-sm'>Suite</strong>
                                                            <p>{user.address.suite}</p>
                                                            <strong className='text-slate-700 text-sm'>Zipcode</strong>
                                                            <p>{user.address.zipcode}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </td>
                                            <td className='px-6 py-2 text-sm text-red-950 flex gap-2'>
                                                <span><i class="bi bi-telephone"></i></span>
                                                <span>{user.phone}</span>
                                            </td>
                                            <td className='px-6 py-2 text-sm'>
                                              <a href={`https://${user.website}`} target='_blank' rel='noopener noreferrer'>{user.website}</a>
                                            </td>
                                            <td>
                                               <ul className=' list-disc'>
                                                    {users.map((user, index)=>(
                                                        <li key={index}>
                                                            <strong className='text-sm text-slate-700'>Name</strong>
                                                            <p>{user.company.name}</p>
                                                            <strong className='text-sm text-slate-700'>Bs</strong>
                                                            <p>{user.company.bs}</p>
                                                            <strong className='text-sm text-slate-700'>catchPhrase</strong>
                                                            <p>{user.company.catchPhrase}</p>
                                                        </li>
                                                    ))}
                                                </ul>                                              
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr key="">
                                        <td colSpan="5"><p>No Data Found</p></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                       </div>
                    )}

                {/* end */}


                {/* with react hook api call */}

                    <div className='grid grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-3 mb-4 my-4'>
                        {loading ? (
                            <p>...Loading</p>
                        ) : (
                            product?.length > 0 ? (
                                product?.slice(0, 12)?.map((pro, index)=>(
                                    <div className='bg-white shadow-sm rounded p-4' key={index}>
                                        <img src={pro.images} alt="product-image" className='' />
                                        <div className='flex justify-between items-center'>
                                            <span className='text-xl font-bold text-pink-900'>{pro.id}</span>
                                            <span className='text-xl font-bold   text-pink-900'>{pro.availabilityStatus}</span>
                                        </div>
                                        <div className='flex justify-between items-center bg-green-900 px-4 py-2 my-2 rounded'>
                                            <span className='text-sm font-bold text-slate-50'>{pro.brand}</span>
                                            <span className='text-sm font-bold text-slate-50'>{pro.category}</span>
                                        </div>
                                         <div className='flex justify-between items-center bg-green-900 px-4 py-2 my-2 rounded'>
                                            <span className='text-sm font-bold text-slate-50'>{pro.price}</span>
                                            <span className='text-sm font-bold text-slate-50'>{pro.rating}</span>
                                            <span className='text-sm font-normal text-slate-50'>{pro.title}</span>
                                        </div>
                                        <div>
                                            
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <>
                                    <p>No Data Found</p>
                                </>
                            )
                        )
                        
                    }
                    </div>

                {/* end */}

          </article>
       </section>
    )
}
export default APICalls