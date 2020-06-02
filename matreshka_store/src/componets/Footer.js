import React from "react";
import { Link } from "react-router-dom";
import { Button}  from 'reactstrap';


function Footer(){

return (
        <div id="main-div-footer">
            <div>
                <h1 id="h1-footer">Contact us at: </h1>
                <p className="p-footer">email: matreshka@gmail.com </p>
                <p className="p-footer">tel:718-458-2317 </p>
                <p className="p-footer">Address: Matreshka Inc. 17 5th Avenue, 3rd Floor, New York, NY 10017 </p>
                <Button id="subscribe-button" size="sm"  tag={Link} to={"/subscribe/"}>Subscribe</Button> 
            </div>
            <img id="matreshka" src={require("../assets/Matreshka1.png")} alt="matreshka picture" />
        </div>)
}

export default Footer;