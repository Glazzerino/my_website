import React from "react";
import "./App.css"


export default class Test extends React.Component{
    render() {
        return (<h1>Hello {this.props.name}</h1>)
    }
}