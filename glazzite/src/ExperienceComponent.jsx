import React from 'react'
import {Container, Row, Col, Image, Jumbotron, ListGroup} from "react-bootstrap"
var arrow = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg>;

function make_component(header, subheader, entries) {
    return (
    <ListGroup.Item>


    <Col>
        <h2>{header}</h2>
        <p4 style={{color:"grey"}}>{subheader}</p4>
    </Col>
        

    {/* <Row>
            <Col md="auto">
                {arrow}
            </Col>
            <Col>
                <p1> Working with <b>computer vision</b> to build an aiming system
                for our autonomous submarine.</p1>
                <br/>
            </Col>
    </Row> */}

    {entries.map(entry => (
        <Row>
            <Col md="auto">
                {arrow}
            </Col>
            <Col>
                <p1>{entry}</p1>
            </Col>
        </Row>
    ))}
    </ListGroup.Item>)
}