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
        itemName: "",
        englishItemName:"",
        itemDescription:"", 
        requestDate: "",
    }
    
    this.handleRequesterName=this.handleRequesterName.bind(this);
    this.handleRequesterEmail=this.handleRequesterEmail.bind(this);
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
    requesterName:"",
    requesterEmail:"",
    itemName: "",
    englishItemName:"",
    itemDescription:"", 
    requestDate: "",
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
                            <p className="request-display-p">Enter your Email</p>
                            <Input   type="text" name="email" id="input-request-email" value={this.state.email} onChange={this.handleEmail} placeholder="Enter your email"/>
                        </FormGroup>
                        <FormGroup className="form-request-mini-divs">
                            <p className="request-display-p">Enter Your Email</p>
                            <Input   type="text" name="email" id="input-request-email" value={this.state.email} onChange={this.handleEmail} placeholder="Enter your email"/>
                        </FormGroup>
                        <FormGroup className="form-request-mini-divs">
                            <p className="request-display-p">Enter Your Email</p>
                            <Input   type="text" name="email" id="input-request-email" value={this.state.email} onChange={this.handleEmail} placeholder="Enter your email"/>
                        </FormGroup>
                        <FormGroup className="form-request-mini-divs">
                            <p className="request-display-p">Enter Your Email</p>
                            <Input   type="text" name="email" id="input-request-email" value={this.state.email} onChange={this.handleEmail} placeholder="Enter your email"/>
                        </FormGroup>
                        <FormGroup className="form-request-mini-divs">
                            <p className="request-display-p">Enter Your Email</p>
                            <Input   type="text" name="email" id="input-request-email" value={this.state.email} onChange={this.handleEmail} placeholder="Enter your email"/>
                        </FormGroup>
                        <FormGroup className="form-request-mini-divs">
                            <p className="request-display-p">Indicate your age</p>
                            <Input   type="text" name="preferences" id="input-request-preferences" value={this.state.age} onChange={this.handleAge} placeholder="Enter your age"/>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup id="form-request-buttons-divs">
                    <Button id="save-button-request" color="primary" class="btn btn-primary" type="submit">Save</Button>{' '}
                    <Button id="cancel-button-request"class="btn btn-secondary" tag={Link} to="/food_search_info">Cancel</Button>
                        </FormGroup>
                </Form>
            </Container>  
            </Container>
        )
    }
}

export default Requests;