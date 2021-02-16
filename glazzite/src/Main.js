import React from "react";
import "./Main.css";
import headshot from "./imgs/hshot.png";
import { Container, Row, Col, Image, Jumbotron, ListGroup } from "react-bootstrap";
import './ExperienceComponent.jsx'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

var arrow = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
</svg>;

export default class Main extends React.Component {

    make_listcomp(header, subheader, entries) {

        return (
            <ListGroup.Item>

                <Col>
                    <h2>{header}</h2>
                    <p4 style={{ color: "grey" }}>{ReactHtmlParser(subheader)}</p4>
                </Col>

                {entries.map(entry => (
                    <Row>
                        <Col md="auto">
                            {arrow}
                        </Col>
                        <Col>
                            <p1>{ReactHtmlParser(entry)}</p1>
                        </Col>
                    </Row>
                ))}
            </ListGroup.Item>)
    }
    render() {
        return (
            <div id="main">
                <Row>
                    <Col md="auto">
                        <Image src={headshot} alt="a picture of me" thumbnail />
                    </Col>
                    <Col md={6}>
                        <Jumbotron id="about">
                            <h1>About</h1>
                            <p1>
                                I'm a sophomore with a passion in anything
                                STEM. 
                                <br/>
                                I have a special interest for automation, and that's why
                                during my time in college I will be specializing in AI. 
                                <br/>
                                This page lists the things I've worked on I'm most proud of. 
                        <br />
                                <br />
                        {/* Currently involved in a RoboNation team at college. */}

                    </p1>
                        </Jumbotron>
                    </Col>
                </Row>


                <Row>
                    <Col md={6}>
                        <h4>Things I have worked on:</h4>

                        <ListGroup variant="flush">


                            {this.make_listcomp("VantTec", "Programmer - Project won 3<sup>rd</sup> place on Conexión Tec expo",
                                [
                                    "Working with computer vision to build an aiming system for our autonomous submarine.",

                                    "I worked with both machine learning and classical computer vision to build a ROS node for this purpose. Our model achieved an R<sup>2</sup> of 96%.",
                                ])}

                            {this.make_listcomp("Global Game Jam 2021", "Worked with friends on my first ever game jam!",

                                ["Programmed a 2D platformer's main movement mechanics",
                                
                                    "Integrated animations and spritework",
                                ])}

                            {this.make_listcomp("Overture - FIRST robotics competition", "Cofounder/lead programmer - Team awarded with Rookie All Stars recognition",

                                ["Developed robot code.",

                                    "Implemented closed control loops, computer vision and autonomous path following."
                                ])}

                            {this.make_listcomp("Tridimensional Game of Life", 

                                "Personal mini project",

                                ["Made a cube-based cellular automaton world to learn about emergent behavior"
                                ])}

                            {this.make_listcomp("One Month Hack project", "Solo project", [

                                "Developed functional PoC of a test creation and application tool.",

                                "Used AES and RSA encryption to ensure exam's secrecy before and after exam's application."
                            ])}

                        </ListGroup>
                    </Col>

                </Row>
            </div>
        )
    }
}