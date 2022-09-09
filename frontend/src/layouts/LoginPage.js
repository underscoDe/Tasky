import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import loginImage from '../assets/images/todo.jpg'


const LoginPage = () => {
    return (
        <section className="form-section">
            <Container>
                <Row className="justify-content-center">
                    <Col md={6} className="text-center mb-5">
                        <h2 className="heading-section">Login</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={12} lg={10}>
                        <div className="wrap d-md-flex">
                            <div className="img" style={{backgroundImage: `url(${loginImage})`}} />
                            <div className="login-wrap p-4 p-md-5">
                                <div className="d-flex">
                                    <div className="w-100">
                                        <h3 className="mb-4">Sign In</h3>
                                    </div>
                                    <div className="w-100">
                                        <p className="social-media d-flex justify-content-end">
                                            <a href="#"
                                                className="social-icon d-flex align-items-center justify-content-center"><span
                                                    className="fa fa-facebook"></span></a>
                                            <a href="#"
                                                className="social-icon d-flex align-items-center justify-content-center"><span
                                                    className="fa fa-twitter"></span></a>
                                        </p>
                                    </div>
                                </div>
                                <Form className="signin-form">
                                    <Form.Group className="mb-3">
                                        <Form.Label className="label" for="name">Username</Form.Label>
                                        <Form.Control type="text" placeholder="Username" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label className="label" for="password">Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign In</Button>
                                    </Form.Group>
                                </Form>
                                <p className="text-center">Not a member? <a data-toggle="tab" href="#signup">Sign Up</a></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LoginPage;