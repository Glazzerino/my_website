import { render } from "@testing-library/react";
import React from "react";
import "./Contact.css"
import {Container, Row, Col} from "react-bootstrap";
import Obfuscate from "react-obfuscate";

export default class Contact extends React.Component {
    render() {
        return(
        <div id="contact">
            <Row>
                <Obfuscate
            email="fztmon@gmail.com"
            aria-label="Email"
            />
            <Obfuscate
            href="https://github.com/Glazzerino"
            />
            <Obfuscate
            href="www.linkedin.com/in/paco-cs"
            />
            </Row>
            
        </div>
        
    )};
}