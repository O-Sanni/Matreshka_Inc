import React from "react";
import Navigation from "./Navigation"
import Footer from "./Footer";
import {Container}  from 'reactstrap';
import "../styles/HomePage.scss"


function HomePage(){
    return(
        <div id="main-div-home-page">
            <Navigation />
            <Container id="div-home-page">
                <h1 id="h1-home-page">Welcome to "Matreshka Inc."</h1>
                <h2 id="h2-home-page">About Us</h2>
                <p id="p-home-page">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </Container>
                <div className="footer-div">
                <Footer />  
            </div> 
        </div>
    )
}

export default HomePage