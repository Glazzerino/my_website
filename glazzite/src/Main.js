import React from "react";
import "./Main.css";
import headshot from "./imgs/hshot.png";
import {Container, Row, Col, Image, Jumbotron, ListGroup} from "react-bootstrap";

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
                <Jumbotron id="about">
                    <h1>About</h1>
                    <p1>
                        I'm a 20 year old college student with a wide interest in anything
                        STEM. I've had experiences with robotics and machine learning. I will
                        be focusing those areas through my time at college. I am currently diving 
                        into quantum computing basics.
                        <br/>
                        <br/>
                        I'm currently involved in a RoboNation team at my univerisity.

                    </p1>
                </Jumbotron>
            </Col>
            </Row>

            <Row>
                <Col md={6}>
                <h4>Things I have worked on:</h4>
                {/* Projects */}
                <ListGroup variant="flush">
                    <ListGroup.Item>

                        <Col>
                            <h2>VantTec - RoboNation team</h2>
                            <p4 style={{color:"grey"}}>Programmer - Project won 3<sup>rd</sup> place on Conexión Tec expo</p4>
                        </Col>
                            

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
                                <p1>
                                    I worked with both machine learning and classical computer vision to build a 
                                    ROS node for this purpose. Our model achieved an R<sup>2</sup> of 96%.
                                </p1>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Col>
                            <h2>Overture - FIRST Robotics Competition</h2>
                            <p4 style={{color:"grey"}}>Cofounder/lead programmer - Team awarded with Rookie All Stars recognition</p4>
                        </Col>
                        
                        <Row>
                            <Col md="auto">{arrow}</Col>
                            <Col>
                                <p1>
                                    Developed robot code.
                                </p1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="auto">{arrow}</Col>
                            <Col>
                                <p1>
                                    Implemented closed control loops, computer vision and autonomos path following.
                                </p1>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Col>
                            <h2>One Month Hack project</h2>
                            <p4 style={{color:"grey"}}>Solo project</p4>
                        </Col>
                        <Row>
                            <Col md="auto">{arrow}</Col>
                            <Col>
                                <p1>
                                    Developed functional PoC of a test creation and application tool.
                                </p1>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="auto">{arrow}</Col>
                            <Col>
                                <p1>
                                    Used AES and RSA encryption to ensure exam's secrecy before and after
                                    exam's application.
                                </p1>
                            </Col>
                        </Row>
                    
                    </ListGroup.Item>
                    {/* <ListGroup.Item>
                        <Col>
                            <h2>Zona Híbrida expo 2018 - Hologram Pyramid</h2>
                            <p4 style={{color:"grey"}}>Project manager</p4>
                        </Col>
                        

                        <Row>
                            <Col md="auto">{arrow}</Col>
                            <Col>
                                <p1>
                                    Highschool robotics club was invited to expose different 
                                    attractions. 
                                </p1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="auto">{arrow}</Col>
                            <Col>
                                <p1>
                                    We made a large hologram pyramid on topf o
                                </p1>
                            </Col>
                        </Row>
                    
                    </ListGroup.Item> */}
                </ListGroup>
                </Col>
                
            </Row>
        </div>
    )}
}