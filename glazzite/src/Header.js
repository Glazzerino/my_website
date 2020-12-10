import React from "react";
import "./Header.css";

export default class Header extends React.Component {
    render() {return(
        <div>
            <div id="header_bar">
            <div>
                <h1 class="text">Francisco Zamora Treviño</h1>
            </div>
            
            
        </div>
            <div id="sub_bar">
                <h5 id="greeting">
                    Hello!  I'm an undergrad CS student at ITESM
                </h5>
            </div>
        </div>
        
    )}
}