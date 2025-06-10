import React, { useEffect } from 'react'
import Child from './Child'
import { Card, CardBody, CardTitle, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'

const Parent = () => {

    const data = {
        name: 'Rajesh Pandilla',
        message: 'Welcome to the parent componet',
        age: 40,
        role: 'SSE UI Developer',
        empid: 202786
    }

    const userDetails = [
        { title: 'Uniq Key List in React' },
        {title: 'Uniq Key List in React', name: 'Rajesh', lname: 'Pandilla', age: 40, phone: 8247728356, email: 'rajesh@gmail.com', role:'SSE UI DEVELOPER' },
        {title: 'Uniq Key List in React', name: 'Ushasri', lname: 'Pandilla', age: 34, phone: 970456789, email: 'usha@gmail.com' },
        {title: 'Uniq Key List in React', name: 'Aadhya', lname: 'Pandilla', age: 9, phone: 9966843353, email: 'aadhya@gmail.com' },
        {title: 'Uniq Key List in React', name: 'Arjun', lname: 'Pandilla', age: 4, phone: 8247728356, email: 'arjun@gmail.com' },
        {title: 'Uniq Key List in React', name: 'Sathyanarayana', lname: 'Pandilla', age: 76, phone: 8008930060, email: 'sathya@gmail.com' },
        {title: 'Uniq Key List in React', name: 'Anasurya', lname: 'Pandilla', age: 65, phone: 996655358, email: 'anasurya@gmail.com' }
    ]

    const getproducts=async()=>{
        const response = await fetch('https://dummyjson.com/products')
        const res = await response.json()
        console.log(res.products.length, 'product data viewed')
    }

    const getTodos=async()=>{
        try{

            const tododata = await fetch('https://jsonplaceholder.typicode.com/todos')
            const restodo = await tododata.json()
            console.log(restodo, 'todo list data display')
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getTodos()
    }, [])

    useEffect(()=>{
        getproducts()
    }, [])

    useEffect(()=>{
        fetch('https://dummyjson.com/products').then((res)=> res.json())
        .then((pro)=>{
            console.log(pro, 'data')
        })
    }, [])

    return (
        <>
            <section>
                <article className='container-fluid g-0'>
                    <div className='row'>
                        <Col lg={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title className='text-center fs-2 fw-semibold'>
                                        Uniq object Key Values
                                    </Card.Title>
                                    <ListGroup>
                                        <ListGroupItem>Name: {data.name}</ListGroupItem>
                                        <ListGroupItem>Message: {data.message}</ListGroupItem>

                                        <ListGroupItem>Age: {data.age}</ListGroupItem>
                                        <ListGroupItem>Role: {data.role}</ListGroupItem>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4}>
                            <Card className='bg-dark'>
                                <CardBody className='text-white border p-3 rounded-2'>
                                    <Child data={data}/>
                                </CardBody>
                            </Card>
                        </Col>

                    </div>
                </article>
            </section>

            {/* with list items details uniq keys when ever we want add and delete the key values */}

            <section>
                <Container className='g-0'>
                    <Row>
                        <Col lg={12} className=''>
                            <h1 className='text-center fw-bold my-4'>Uniq key values</h1>
                        </Col>
                        {userDetails.length > 0 ?(userDetails.slice()?.map((item, index)=>(
                           <Col lg={4} key={index} className='mb-3'>
                                <Card className='rounded-4 overflow-hidden'>
                                    <CardBody className='border border-1 bg-dark'>
                                        <div className='bg-info-subtle rounded-3 p-3 mb-3'>
                                            <h2 className='text-center fs-5'>{item.title}</h2>
                                        </div>
                                        <div className='d-flex justify-content-between text-white my-4'>
                                            <h6>First Name: {item.name}</h6>
                                            <h6>Last Name: {item.lname}</h6>
                                        </div>
                                         <div className='d-flex justify-content-between text-white mb-3'>
                                            <h6>Age: {item.age}</h6>
                                            <h6>Phone Number: {item.phone}</h6>
                                        </div>
                                        <div className='bg-success rounded-3 p-3 border border-1'>
                                            <h6 className='text-center text-white'>{item.email}</h6>
                                        </div>
                                    </CardBody>
                                </Card>
                           </Col>
                        ))):(
                            <>
                                <p className='text-center'>No Data found</p>
                            </>
                        )}
                    </Row>
                </Container>
            </section>

            {/* end */}
        </>
    )
}

export default Parent