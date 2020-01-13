import React from 'react';
import IconSocial from "./components/IconSocial";
import SubTitle from "./components/SubTittle";
import SpanText from "./components/SpanText";
import TopicText from "./components/TopicText/TopicText";
import Hr from "./components/hr";
import ProjectBox from "./components/ProjectBox";
import NavDrawer from "./components/NavDrawer";
import "./components/IconSocial/IconSocial.css"
import {FaFacebook, FaTwitter, FaLinkedinIn, TiThMenu, FaChevronRight, FiChevronRight} from "react-icons/all";
import {Col, Container, Image, Row} from "react-bootstrap";
import {Navbar, Nav, NavDropdown, Button} from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import {Fullpage, Slide} from 'fullpage-react';
import inosuke from "./background.jpg";
import {Line} from 'rc-progress';
import {MDBContainer} from 'mdbreact';

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

/*const progressTitleLeft = {
    textAlign: "left",
    marginLeft: "0"
};
const progressTitleRight = {
    textAlign: "right",
};*/
const progressTitle = {
    marginBottom: "20px"
};

const verticalSlides = [
    <Slide style={{backgroundColor: "#999999"}}>
        <TopicText text={"SERVICES"}/>
        <Container style={bodyStyle}>
            <Row>
                <Col>
                    <div style={Object.assign(contentStyle, {paddingTop: "7em"})}><SpanText
                        text={"EASY AND FUN".toUpperCase()} helloText={"I LIKE TO MAKE THINGS ".toUpperCase()}/></div>
                </Col>
                <Col className="align-middle">
                    <img src={require("./quynhaka.jpg")} width="500vh" height="500vh"/>
                </Col>
            </Row>

        </Container>

    </Slide>,
    <Slide style={{backgroundColor: '#5AE271'}}>
        <div>
            <TopicText text={"MY WORK"}/>
            <Container style={bodyStyle}>
                <div style={Object.assign(contentStyle, {paddingTop: "7em"})}><SpanText
                    text={"FEARTURED WORK".toUpperCase()}/></div>
                <Row className="mt-5">
                    <Col>
                        <div className="border border-dark">
                            <ProjectBox url={"#"} topic={"Helldsad sadsa asdsadas dasdsaddo"}
                                        text={"uynhssads aadasdd"}/>
                        </div>
                    </Col>
                    <Col>
                        <div className="border border-dark">
                            <ProjectBox url={"haha"} topic={"Helsadsadsaddo"} text={"uynh saadasdd"}/>
                        </div>
                    </Col>
                    <Col>
                        <div className="border border-dark">
                            <ProjectBox url={"haha"} topic={"Helsadsadsadsd sadsaddo"}
                                        text={"uynhsadasdsad asdsdasadasdd"}/>
                        </div>
                    </Col>
                    <Col>
                        <div className="border border-dark">
                            <ProjectBox url={"haha"} topic={"Helsadsadsadsd sadsaddo"}
                                        text={"uynhsadasdsad asdsdasadasdd"}/>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col xs={3}>
                        <div className="border border-dark">
                            <ProjectBox url={"#"} topic={"Helldsad sadsa asdsadas dasdsaddo"}
                                        text={"uynhssads aadasdd"}/>
                        </div>
                    </Col>
                </Row>

                <h5 className="float-right mt-3">View All Project <FiChevronRight className="mb-1 h3"/></h5>
                {/* <ProjectBox url={"haha"} topic={"Helldsadsadsadsadsaddo"} text={"uynhsdsadsaadasdd"}/>*/}
            </Container>
        </div>
    </Slide>,
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
                        <Col sm={1}></Col>
                        <Col className="text-lg-right">
                            {/*Develop*/}
                            <div className="d-md-inline">
                                <div className="float-sm-left">Develop</div>
                                <div className="float-sm-right">80%</div>
                            </div>
                            <div style={progressTitle}>
                                <Line percent="80" strokeWidth="3" strokeColor="#FB748C" trailWidth="3"
                                      trailColor="#F9120F"/>
                            </div>
                            {/*SoftSkill*/}
                            <div className="d-inline">
                                <div className="float-sm-left">Soft skill</div>
                                <div className="float-sm-right">50%</div>
                            </div>
                            <div style={progressTitle}>
                                <Line percent="50" strokeWidth="3" strokeColor="#FB748C" trailWidth="3"
                                      trailColor="#F9120F"/>
                            </div>
                            {/*Design*/}
                            <div className="d-inline">
                                <div className="float-sm-left">Design</div>
                                <div className="float-sm-right"> 60%</div>
                            </div>
                            <div style={progressTitle}>
                                <Line percent="60" strokeWidth="3" strokeColor="#FB748C" trailWidth="3"
                                      trailColor="#F9120F"/>
                            </div>
                            {/*Marketing*/}
                            <div className="d-inline">
                                <div className="float-sm-left">Marketing</div>
                                <div className="float-sm-right">65%</div>
                            </div>
                            <div style={progressTitle}>
                                <Line percent="65" strokeWidth="3" strokeColor="#FB748C" trailWidth="3"
                                      trailColor="#F9120F"/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Hr/>
                    </Row>
                </Col>
            </Container>
        </div>
    </Slide>,
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
                <NavDrawer name={"Nhu"}></NavDrawer>
            </Fullpage>
        </div>
    );
}

export default App;
