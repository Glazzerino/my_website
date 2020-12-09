import React from "react";
import "./Main.css";
import headshot from "./imgs/hshot.png";
import {Container, Row, Col, Image, Jumbotron} from "react-bootstrap";
export default class Main extends React.Component {
    render() {return(

        <div className="Main">
            <Container fluid>
                <Row>
                    <Col md="auto">
                        <div id="image_holder">
                            <Image src={headshot} thumbnail/>
                        </div>
                    </Col>
                    <Col>
                        <Jumbotron>
                            <h1>Hello</h1>
                        </Jumbotron>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )}
}