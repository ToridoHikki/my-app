import React from 'react';
import logo from './logo.svg';
import './App.css';
import IconSocial from "./components/IconSocial";
import SubTitle from "./components/SubTittle";
import "./components/IconSocial/IconSocial.css"
import {FaFacebook, FaTwitter, FaLinkedinIn} from "react-icons/all";
import {Col, Container, Row} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
    return (
        <div className="App">
            <header className="">
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
                <Container>
                    <Row className="justify-content-end pt-3">
                        <ListGroup horizontal>
                            <IconSocial icon={<FaTwitter/>} url={"https://twitter.com/"}/>
                            <IconSocial icon={<FaFacebook/>} url={"https://www.facebook.com/"}/>
                            <IconSocial icon={<FaLinkedinIn/>} url={"https://www.facebook.com/"}/>
                        </ListGroup>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col>
                            <SubTitle text={"Welcome To Torido"}/>
                        </Col>
                    </Row>
                </Container>

                <img src={logo} className="App-logo" alt="logo"/>
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

            </header>
        </div>
    );
}

export default App;
