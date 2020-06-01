import React from "react";
import { Link } from "react-router-dom";
import { Button}  from 'reactstrap';


function Footer(){

return (<div>
    <h1>Contact us at: </h1>
    <p>email: matreshka@gmail.com </p>
    <p>tel:718-458-2317 </p>
    <p>Address: Matreshka Inc. 17 5th Avenue, 3rd Floor, New York, NY 10017 </p>
    <Button size="sm" color="primary" tag={Link} to={"/subscribe/"}>Subscribe</Button> 
</div>)
}

export default Footer;