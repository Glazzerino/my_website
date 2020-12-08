import React from "react";
import "./Main.css";
import headshot from "./imgs/headshot.png";
import Jumbotron from 'react-bootstrap/Jumbotron'

export default class Main extends React.Component {
    render() {return(
        <div className="Main">
            <img id="image" src={headshot} alt="me"/>
            <Jumbotron>
                <h1>About</h1>
                <p1>
                    I'm a computer science student with an interest for robotics
                </p1>
            </Jumbotron>
        </div>
    )}
}