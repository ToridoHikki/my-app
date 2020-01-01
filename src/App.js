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
import {Fullpage, Slide} from 'fullpage-react';
import inosuke from "./background.jpg";

const bodyStyle = {
    position: "relative",
    height: "100vh",
    alignContent: "center",
    padding: "0",
    paddingLeft: "5%",
    paddingRight: "5%",
};

const contentStyle = {
    paddingTop: "25%"
};

const fullPageOptions = {
    // for mouse/wheel events
    // represents the level of force required to generate a slide change on non-mobile, 0 is default
    scrollSensitivity: 2,

    // for touchStart/touchEnd/mobile scrolling
    // represents the level of force required to generate a slide change on mobile, 0 is default
    touchSensitivity: 2,
    scrollSpeed: 500,
    resetSlides: true,
    hideScrollBars: true,
    enableArrowKeys: true,

    // optional, set the initial vertical slide
    activeSlide: 0
};

const bgImage = {
    backgroundImage: `url(${inosuke})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};
const verticalSlides = [
    <Slide style={bgImage}>
        <div>
            <TopicText text={"INTRODUCE"}/>
            <Container style={bodyStyle}>
                <Col style={contentStyle}>
                    <Row>
                        <SubTitle text={"Welcome To Torido"}/>
                    </Row>
                    <Row>
                        <SpanText text={"My name is Huynh Nhu.".toUpperCase()} helloText={"Hello ".toUpperCase()}/>
                    </Row>
                    <Row>
                        <Hr/>
                    </Row>
                </Col>
            </Container>
        </div>
    </Slide>,
    <Slide style={{backgroundColor: 'pink'}}>
        <div>
            <TopicText text={"WHAT I DO"}/>
            <Container style={bodyStyle}>
                <Col style={contentStyle}>
                    <Row>
                        <SubTitle text={"About me"}/>
                    </Row>
                    <Row>
                        <Col className="px-0">
                            <p>
                                <SpanText text={" is my mission".toUpperCase()} helloText={"Develop".toUpperCase()}/>
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dicta sit pariatur
                                odio
                                unde deleniti eveniet magni cum, ad iure, vel nisi minima vero voluptates ut ipsum amet
                                iusto hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dicta
                                sit pariatur odio
                                unde deleniti eveniet magni cum, ad iure, vel nisi minima vero voluptates ut ipsum amet
                                iusto hic.</p>
                        </Col>
                        <Col>
                            progress
                        </Col>

                    </Row>
                    <Row>
                        <Hr/>
                    </Row>
                </Col>
            </Container>
        </div>
    </Slide>
];
fullPageOptions.slides = verticalSlides;

function App() {
    return (
        <div className="App">
            <Fullpage {...fullPageOptions}>
                <header className="fixed-top">
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
            </Fullpage>
        </div>
    );
}

export default App;
