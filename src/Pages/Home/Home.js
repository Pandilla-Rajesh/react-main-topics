import React, { useEffect, useState } from 'react'
import Greeting from '../../Component/Greeting/Greeting'
import axios from 'axios';

function Home({name}){

    const [count, setCount] = useState(0)
    const [data, setData] = useState([])
    const [newPost, setNewPost] = useState({
        title:'',
        body:'',
        userId:''
    })
    const [loading, setLoading] = useState(false)

    const getPost = async()=>{
        setLoading(true)
        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData(res.data)
            console.log(res.data, 'get data fetched')
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getPost()
    }, [])

    const postData = async()=>{
        setLoading(true)
        try{
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts')
            setData((prevData)=>([...prevData, response.data]))
            console.log(response.data, 'post data')
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        postData()
    }, [])

    useEffect(()=>{
        setCount((prev) => prev+0)
    }, [count])//Avoiding rerender loops//

    return(
        <section className='p-3'>
            <article className='container'>
                 <h1>Welcome to the Home Component</h1>
                
            <h2>Hello{name}</h2>
            <h3>Count:{count}</h3>
            <button className='btn btn-primary p-3' onClick={()=>setCount(count+1)}>count</button>
            <Greeting name="Ushasri pandilla"/>
            </article>

            <article>
              
            </article>

        </section>
    )
}

export default Home