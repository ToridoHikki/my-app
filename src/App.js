import React from 'react';
import IconSocial from "./components/IconSocial";
import SubTitle from "./components/SubTittle";
import SpanText from "./components/SpanText";
import TopicText from "./components/TopicText/TopicText";
import Hr from "./components/hr";
import "./components/IconSocial/IconSocial.css"
import {FaFacebook, FaTwitter, FaLinkedinIn} from "react-icons/all";
import {Col, Container, Row} from "react-bootstrap";
import {Navbar, Nav} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
    return (
        <div className="App">
                <header className="sticky-top">
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand className="pl-5" href="#home">React-Bootstrap</Navbar.Brand>
                        <Nav.Item className="float-lg-right">
                            <ListGroup horizontal>
                                <IconSocial icon={<FaTwitter/>} url={"https://twitter.com/"}/>
                                <IconSocial icon={<FaFacebook/>} url={"https://www.facebook.com/"}/>
                                <IconSocial icon={<FaLinkedinIn/>} url={"https://www.facebook.com/"}/>
                            </ListGroup>
                        </Nav.Item>
                    </Navbar>
                    {/* <Container>
                    <Row className="justify-content-md-center ">
                        <Col>
                            <IconSocial icon={<FaTwitter/>} url={"https://twitter.com/"}/>
                        </Col>
                        <Col >
                            <IconSocial icon={<FaFacebook/>} url={"https://www.facebook.com/"}/>
                        </Col>
                        <Col>
                            <IconSocial icon={<FaLinkedinIn/>} url={"https://www.facebook.com/"}/>
                        </Col>
                    </Row>
                </Container>*/}
                </header>
            <Container>
                <main>
                    <Container>
                        <Row>
                            <Col sm={1}>
                            </Col>
                            <Col md={6}>
                                <SubTitle text={"Welcome To Torido"}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={1}>
                                <TopicText text={"INTRODUCE"}/>
                            </Col>
                            <Col>
                                <SpanText text={"My name is Huynh Nhu. "} helloText={"Hello "}/>
                                <Hr/>
                            </Col>
                        </Row>
                    </Container>

                    {/*

                <p>
                    Huynh Nhu <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
*/}
                </main>
            </Container>

        </div>
    );
}

export default App;
