import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import { Button, Container, Form, FormGroup, Input, ButtonGroup }  from 'reactstrap';
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../styles/RequestsAndSubscribe.scss"


class Requests extends React.Component{
    constructor(props){
        super(props);
    this.state={
        requesterName:"",
        requesterEmail: "",
        requesterPhoneNumber: "",
        itemName:"",
        requestDate:"",
        englishItemName:""
    }
    this.handleRequesterName=this.handleRequesterName.bind(this);
    this.handleRequesterEmail=this.handleRequesterEmail.bind(this);
    this.handleRequesterPhoneNumber=this.handleRequesterPhoneNumber.bind(this);
    this.handleItemName=this.handleItemName.bind(this);
    this.handleRequestDate=this.handleRequestDate.bind(this);
    this.handleEnglishItemName=this.handleEnglishItemName.bind(this);
    this.submitButtonHandler=this.submitButtonHandler.bind(this);
   
}


//following handle functions will set up states
    handleRequesterName(event){
        event.preventDefault();
        this.setState({requesterName: event.target.value})
    }

    handleRequesterEmail(event){
        event.preventDefault();
        this.setState({requesterEmail: event.target.value})   
    }

    handleRequesterPhoneNumber(event){
        event.preventDefault();
        this.setState({requesterPhoneNumber: event.target.value})   
    }

    handleItemName(event){
        event.preventDefault();
        this.setState({itemName: event.target.value})
    }

    handleEnglishItemName(event){
        event.preventDefault();
        this.setState({englishItemName: event.target.value})   
    }

    handleRequestDate(event){
        event.preventDefault();
        this.setState({requestDate: event.target.value})      
    }

    submitButtonHandler(event){
        event.preventDefault();
        axios.post('/book_store/v1/requests', {
            // https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/requests
            requesterName: this.state.requesterName,
            requesterEmail:this.state.requesterEmail,
            requesterPhoneNumber:this.state.requesterPhoneNumber,
            itemName: this.state.itemName,
            englishItemName:this.state.englishItemName, 
            requestDate: this.state.requestDate,
            dateCompleted:"not complete yet"
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        this.setState({ requesterName:"", requesterEmail:"", requesterPhoneNumber:"", itemName: "", englishItemName:"",requestDate:"" })
    }

    render(){
        return(
            <div id="main-div-request-page">
                <Navigation />
                <Container id="requests-container">
                    <h1 id="h1-request">Did not find something, please let us know, and we will do our best to find this item</h1>
                    <Form onSubmit={this.submitButtonHandler}>
                        <FormGroup className="form-request-mini-divs">
                            <p className="request-display-p">Enter your name</p>
                            <Input  className="input-request-class" type="text" name="requesterName" id="input-request" value={this.state.requesterName} onChange={this.handleRequesterName} placeholder="Enter your name"/>
                        </FormGroup>
                        <FormGroup className="form-request-mini-divs">
                            <p className="request-display-p">Enter your email</p>
                            <Input  className="input-request-class" type="text" name="requesterEmail" id="input-request" value={this.state.requesterEmail} onChange={this.handleRequesterEmail} placeholder="Enter your email"/>
                        </FormGroup>
                        <FormGroup className="form-request-mini-divs">
                            <p className="request-display-p">Enter your phone number</p>
                            <Input className="input-request-class"  type="text" name="requesterPhoneNumber" id="input-request" value={this.state.requesterPhoneNumber} onChange={this.handleRequesterPhoneNumber} placeholder="Enter your phone number"/>
                        </FormGroup>
                        <FormGroup className="form-request-mini-divs">
                            <p className="request-display-p">Enter the item name in Russian,if any</p>
                            <Input className="input-request-class"  type="text" name="itemName" id="input-request" value={this.state.itemName} onChange={this.handleItemName} placeholder="Enter item name in Russian"/>
                        </FormGroup>
                        <FormGroup className="form-request-mini-divs">
                            <p className="request-display-p">Enter item name in English</p>
                            <Input className="input-request-class"  type="text" name="englishItemName" id="input-request" value={this.state.englishItemName} onChange={this.handleEnglishItemName} placeholder="Enter item name in English"/>
                        </FormGroup>
                        <FormGroup className="form-request-mini-divs">
                            <p className="request-display-p">Enter request date</p>
                            <Input className="input-request-class"  type="text" name="requestDate" id="input-request" value={this.state.requestDate} onChange={this.handleRequestDate} placeholder="Enter request date"/>
                        </FormGroup>
                        <ButtonGroup id="form-request-buttons-divs">
                            <Button className="save-button" color="primary" class="btn btn-primary" type="submit">Save</Button>
                            <Button className="cancel-button" class="btn btn-secondary" tag={Link} to="/">Cancel</Button>
                        </ButtonGroup>
                    </Form>
                </Container>
                <div className="footer-div">
                    <Footer />
                </div>
            </div>  
        )
    } 
 }

export default Requests;