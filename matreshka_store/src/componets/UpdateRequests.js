import React, { Component } from 'react';
import axios from "axios";
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Navigation from "./Navigation";

class AddOrEditbooks extends Component {
  
  requests = {
    requesterName: "",
    requesterEmail:"",
    requesterPhoneNumber:"",
    itemName: "",
    englishItemName:"",
    requestDate:"",
    dateCompleted:""
  };

  constructor(props) {
    super(props);
    this.state = { 
      item: this.requests,
      id : this.props.match.params.id,
      put: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

    this.getRequestInfo();
    
  }

async getRequestInfo(){
try {
 const request= await axios.get(`/book_store/v1/requests/${this.state.id}`)
//  https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/requests/${this.state.id}
  this.setState({item:request.data});}
  catch(error){console.log(error)};
}


  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();

  axios.put(`/book_store/v1/requests/${this.state.id}`, this.state.item)
//   https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/books/${this.state.id}
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render() {
    const {item} = this.state;
    return <div>
    <Navigation />
      <Container>
        Edit Request
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="requesterName">Requester's name</Label>
            <Input type="text" name="requesterName" id="requesterName" value={item.requesterName || ''}
                   onChange={this.handleChange} autoComplete="requesterName"/>
          </FormGroup>
          <FormGroup>
            <Label for="requesterEmail">Requester's email</Label>
            <Input type="text" name="requesterEmail" id="requesterEmail" value={item.requesterEmail || ''}
                   onChange={this.handleChange} autoComplete="requesterEmail"/>
          </FormGroup>
          <FormGroup>
            <Label for=" requesterPhoneNumber">Requester's phone number</Label>
            <Input type="text" name=" requesterPhoneNumber" id=" requesterPhoneNumber" value={item. requesterPhoneNumber || ''}
                   onChange={this.handleChange} autoComplete=" requesterPhoneNumber"/>
          </FormGroup>
          <FormGroup>
            <Label for="itemName">Name of item</Label>
            <Input type="text" name="itemName" id="itemName" value={item.itemName || ''}
                   onChange={this.handleChange} autoComplete="itemName"/>
          </FormGroup>
          <FormGroup>
            <Label for="englishItemName">Name of item in English</Label>
            <Input type="text" name="englishItemName" id="englishItemName" value={item.englishItemName || ''}
                   onChange={this.handleChange} autoComplete="englishItemName"/>
          </FormGroup>
          <FormGroup>
            <Label for="requestDate">Request date</Label>
            <Input type="text" name="requestDate" id="requestDate" value={item.requestDate || ''}
                   onChange={this.handleChange} autoComplete="requestDate"/>
          </FormGroup>
          <FormGroup>
            <Label for="dateCompleted">Request coplete date</Label>
            <Input type="text" name="dateCompleted" id="dateCompleted" value={item.dateCompleted || ''}
                   onChange={this.handleChange} autoComplete="dateCompleted"/>
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/admin">Cancel</Button>
          </FormGroup>
         
        </Form>
      </Container>
    </div>
  }
}

export default withRouter(AddOrEditbooks);