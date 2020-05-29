import React from "react";
import { Link, withRouter} from "react-router-dom";
import { Button, Container, Form, FormGroup, Input }  from 'reactstrap';
import "../styles/Subscribe.scss"

class Subscribe extends React.Component{

  
constructor(props){
    super(props);
    this.state={
        email:"",
        age:""
    }
    
    this.handleEmail=this.handleEmail.bind(this);
    this.handleAge=this.handleAge.bind(this);
    this.submitButtonHandler=this.submitButtonHandler.bind(this);
    }

handleEmail(event){
    event.preventDefault();
    this.setState({email: event.target.value})
}
handleAge(event){
    event.preventDefault();
    this.setState({age: event.target.value})
    
}

async submitButtonHandler(event){
    event.preventDefault();
    const {item}=this.state;
    await fetch(`/book_store/v1/subscribe`,{
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item),
        });
    
    }
render(){
    const {item}=this.state
    return(
        <Container id="main-div-subscribe-page">
        <h1 id="subscribe-page-h1">Welcome to "Matreshka, Inc."</h1>
            <Container id="subscribe-page-form-div">
            <p id="p-subscribe">Please subscribe to receive our updates every day</p>
                <Form onSubmit={this.submitButtonHandler}>
                    <FormGroup id="form-subscribe-inputs-div">
                        <FormGroup className="form-subscribe-mini-divs">
                            <p className="subscribe-display-p">Enter Your Email</p>
                            <Input   type="text" name="email" id="input-subscribe-email" value={this.state.email} onChange={this.handleEmail} placeholder="Enter your email"/>
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

export default withRouter(Subscribe);
