import React from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import { Button, Container, Form, FormGroup, Input }  from 'reactstrap';

class Requests extends React.Component{

  
constructor(props){
    super(props);
    this.state={
        requesterName:"",
        requesterEmail:"",
        requesterPhoneNumber:"",
        itemName: "",
        englishItemName:"",
        itemDescription:"", 
        requestDate: "",
    }
    
    this.handleRequesterName=this.handleRequesterName.bind(this);
    this.handleRequesterEmail=this.handleRequesterEmail.bind(this);
    this.handleRequesterPhoneNumber=this.handleRequesterPhoneNumber.bind(this);
    this.handleItemName=this.handleItemName.bind(this);
    this.handleEnglishItemName=this.handleEnglishItemName.bind(this);
    this.handleItemDescription=this.handleItemDescription.bind(this);

    }

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
handleItemDescription(event){
    event.preventDefault();
    this.setState({itemDescription: event.target.value})
}
requestDate(){
    event.preventDefault();
    let 
    this.setState({requestDate: Date.now()})
    
}


submitButtonHandler(event){
    event.preventDefault();
    axios.post('/book_store/v1/requests', {
        requesterName: this.state.requesterName,
        requesterEmail:this.state.requesterEmail,
        requesterPhoneNumber:this.state.requesterPhoneNumber,
        itemName: this.state.itemName,
        englishItemName:this.state.englishItemName,
        itemDescription:this.state.itemDescription, 
        requestDate: this.state.requestDate,
        dateCompleted:""
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    }
render(){
    return(
        <Container id="main-div-request-page">
        <h1 id="request-page-h1">Welcome to "Matreshka, Inc."</h1>
            <Container id="request-page-form-div">
            <p id="p-request">Dont find what you need, please submit your request</p>
                <Form onSubmit={this.submitButtonHandler}>
                    <FormGroup id="form-request-inputs-div">
                        <FormGroup className="form-request-mini-divs">
                            <p className="request-display-p">Enter your name</p>
                            <Input   type="text" name="requeserName" id="input-request-email" value={this.state.requeserName} onChange={this.handleRequesterName} placeholder="Enter your name"/>
                        </FormGroup>
                        <FormGroup className="form-request-mini-divs">
                            <p className="request-display-p">Enter your email</p>
                            <Input   type="text" name="requesterEmail" id="input-request-email" value={this.state.requesterEmail} onChange={this.handleRequesterEmail} placeholder="Enter your email"/>
                        </FormGroup>
                        <FormGroup className="form-request-mini-divs">
                            <p className="request-display-p">Enter your phone number</p>
                            <Input   type="text" name="requesterPhoneNumber" id="input-request-email" value={this.state.requesterPhoneNumber} onChange={this.handleRequesterPhoneNumber} placeholder="Enter your phone number"/>
                        </FormGroup>
                        <FormGroup className="form-request-mini-divs">
                            <p className="request-display-p">Enter the item name in Russian,if any</p>
                            <Input   type="text" name="itemName" id="input-request-email" value={this.state.itemName} onChange={this.handleItemName} placeholder="Enter item name in Russian"/>
                        </FormGroup>
                        <FormGroup className="form-request-mini-divs">
                            <p className="request-display-p">Enter item name in English</p>
                            <Input   type="text" name="englishItemName" id="input-request-email" value={this.state.englishItemName} onChange={this.handleEnglishItemName} placeholder="Enter item name in English"/>
                        </FormGroup>
                        <FormGroup className="form-request-mini-divs">
                            <p className="request-display-p">Enter item description, if any</p>
                            <Input   type="text" name="itemDescription" id="input-request-email" value={this.state.itemDescription} onChange={this.handleItemDescription} placeholder="Enter item description"/>
                        </FormGroup>
                    </FormGroup>
       
                </Form>
            </Container>  
            </Container>
        )
    }
}

export default Requests;