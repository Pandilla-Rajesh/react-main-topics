import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {

    return (

        <section className='info-footer-bg pb-5 pt-5 text-white'>
            <Container>
                <Row>
                    <Col xl={ 3 } sm={ 6 }>
                        lfvjf
                    </Col>
                    <Col sm={ 6 } xl={ 2 } md={ 3 }>
                        Company
                    </Col>
                    <Col sm={ 6 } xl={ 2 } md={ 3 }>
                        pages
                    </Col>
                    <Col sm={ 6 } xl={ 2 } md={ 3 }>
                        Information
                    </Col>
                    <Col sm={ 12 } md={ 3 }>
                        Connect withus
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer