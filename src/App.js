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
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';

function App() {
    return (
        <div className="App">
            <header className="sticky-top">
                <Navbar bg="transparent" className="flex">
                    <Container>
                        <Navbar.Brand className="mr-auto" href="#home">Torido Milos</Navbar.Brand>
                        <Nav.Item className="ml-auto">
                            <ListGroup horizontal>
                                <IconSocial icon={<FaTwitter/>} url={"https://twitter.com/"}/>
                                <IconSocial icon={<FaFacebook/>} url={"https://www.facebook.com/"}/>
                                <IconSocial icon={<FaLinkedinIn/>} url={"https://www.facebook.com/"}/>
                            </ListGroup>
                        </Nav.Item>
                    </Container>
                </Navbar>
            </header>
            <div>
                <TopicText text={"INTRODUCE"}/>
                <Container style={bodyStyle}>
                    <Col style={contentStyle}>
                        <Row>
                            <SubTitle text={"Welcome To Torido"}/>
                        </Row>
                        <Row>
                            <SpanText text={"My name is Huynh Nhu. "} helloText={"Hello "}/>
                        </Row>
                        <Row>
                            <Hr/>
                        </Row>
                    </Col>
                </Container>
            </div>
        </div>
    );
}

const bodyStyle = {
    position: "relative",
    height: "100vh",
    alignContent: "center",
    padding: "0",
    paddingLeft: "5%",
    paddingRight: "5%",
};

const contentStyle = {
    paddingTop:"25%"
};

export default App;
