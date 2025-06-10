import React from 'react'
import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'react-bootstrap'

const Child = (props)=>{

    const {name, message, age, role, empid} = props.data

    return(
      <>
         <CardTitle className='bg-success text-white p-3'>Name: {name}</CardTitle>
         <CardText>Message: {message}</CardText>
         <div className='d-flex justify-content-between'>
            <h4>Age: {age}</h4>
            <h4>Emp Id: {empid}</h4>
         </div>
           <h5>Role: {role}</h5>
      </>
    )
}

export default Child