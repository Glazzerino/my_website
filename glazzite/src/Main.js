import React from "react";
import "./Main.css";
import headshot from "./imgs/hshot.png";
import {Container, Row, Col, Image, Jumbotron as div, ListGroup} from "react-bootstrap";

var arrow = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>;

export default class Main extends React.Component {
    render() {return(
        <div id="main">
            <Row>
            <Col md="auto">
                <Image src={headshot} alt="a picture with me in it" thumbnail/>
            </Col>
            <Col md={6}>
                <div id="about">
                    <h1>About</h1>
                    <p1>
                        When I'm not busy with homework I'm probably working on something
                        robotics-related. My STEMiest experiences happened while working
                        on a robot. That's just one of my interest though.
                        <br/>
                        <br/>
                        I'm currently involved in a RoboNation team at my univerisity.

                    </p1>
                </div>
            </Col>
            </Row>

            <Row>
                <Col md={6}>
                <h4>Projects I've worked on:</h4>
                {/* Projects */}
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                        <Col>
                            <h2>VantTec</h2>
                            <p4 style={{color:"grey"}}>As part of the software team</p4>
                        </Col>
                            
                        </Row>
                        <Row>
                                <Col md="auto">
                                    {arrow}
                                </Col>
                                <Col>
                                    <p1> Working with <b>computer vision</b> to build an aiming system
                                    for our autonomous submarine.</p1>
                                    <br/>
                                </Col>
                        </Row>

                        <Row>
                            <Col md="auto">
                                {arrow}
                            </Col>
                            <Col>
                                <p1>I worked with both machine learning and classical computer vision to build a 
                                    ROS node for this purpose. Our model achieved an R<sup>2</sup> of 96%.
                                </p1>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Col>
                            <h2>Overture </h2>
                            <p4 style={{color:"grey"}}>Cofounder</p4>
                        </Col>
                        <Row>
                            <Col md="auto">{arrow}</Col>
                            <Col>
                                <p1>
                                    Wrote 2019's robot code. Developed a wrapper class to subdivide
                                    a total of 1257 lines of code into individual files
                                </p1>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col md="auto">{arrow}</Col>
                            <Col>
                                <p1>
                                    Implemented closed control loops, computer vision and path following
                                </p1>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Col>
                            <h2>Test taking app</h2>
                            <p4 style={{color:"grey"}}>Solo project</p4>
                        </Col>
                        <Row>
                            <Col md="auto">{arrow}</Col>
                            <Col>
                                <p1>
                                    Developed an app to create, distribute and take tests with offline capabilities.
                                </p1>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="auto">{arrow}</Col>
                            <Col>
                                <p1>
                                    Used AES and RSA.
                                </p1>
                            </Col>
                        </Row>
                    
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Col>
                            <h2>Top Teen programmer</h2>
                            <p4 style={{color:"grey"}}>Solo project</p4>
                        </Col>
                        

                        <Row>
                            <Col md="auto">{arrow}</Col>
                            <Col>
                                <p1>
                                    Used AES and RSA.
                                </p1>
                            </Col>
                        </Row>
                    
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                
            </Row>
        </div>
    )}
}