import React from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import { Button, Container, Form, FormGroup, Input }  from 'reactstrap';

class Subscribe extends React.Component{

  
constructor(props){
    super(props);
    this.state={
        email:"",
        fullName: "",
        age:""
    }
    
    this.handleEmail=this.handleEmail.bind(this);
    this.handleFullName=this.handleFullName.bind(this);
    this.handleAge=this.handleAge.bind(this);
    this.submitButtonHandler=this.submitButtonHandler.bind(this);
    }

handleEmail(event){
    event.preventDefault();
    this.setState({email: event.target.value})
}
handleFullName(event){
    event.preventDefault();
    this.setState({fullName: event.target.value})
    
}
handleAge(event){
    event.preventDefault();
    this.setState({age: event.target.value})
    
}

submitButtonHandler(event){
    event.preventDefault();
    axios.post('/book_store/v1/subscribe', {
        email: this.state.email,
        fullName: this.state.fullName,
        age: this.state.age
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({email:"", fullName: "", age:""})
    }
render(){
    return(
        <Container id="main-div-subscribe-page">
        <h1 id="subscribe-page-h1">Welcome to "Matreshka, Inc."</h1>
            <Container id="subscribe-page-form-div">
            <p id="p-subscribe">Please subscribe to receive our daily updates</p>
                <Form onSubmit={this.submitButtonHandler}>
                    <FormGroup id="form-subscribe-inputs-div">
                        <FormGroup className="form-subscribe-mini-divs">
                            <p className="subscribe-display-p">Enter your email</p>
                            <Input   type="text" name="email" id="input-subscribe-email" value={this.state.email} onChange={this.handleEmail} placeholder="Enter your email"/>
                        </FormGroup>
                        <FormGroup className="form-subscribe-mini-divs">
                            <p className="subscribe-display-p">Enter your full name</p>
                            <Input   type="text" name="fullName" id="input-subscribe-email" value={this.state.fullName} onChange={this.handleFullName} placeholder="Enter your full name"/>
                        </FormGroup>
                        <FormGroup className="form-subscribe-mini-divs">
                            <p className="subscribe-display-p">Indicate your age</p>
                            <Input   type="text" name="preferences" id="input-subscribe-preferences" value={this.state.age} onChange={this.handleAge} placeholder="Enter your age"/>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup id="form-subscribe-buttons-divs">
                    <Button id="save-button-subscribe" color="primary" class="btn btn-primary" type="submit">Save</Button>{' '}
                    <Button id="cancel-button-subscribe"class="btn btn-secondary" tag={Link} to="/food_search_info">Cancel</Button>
                        </FormGroup>
                </Form>
            </Container>  
            </Container>
        )
    }
}

export default Subscribe;
