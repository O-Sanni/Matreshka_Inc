import React, { Component } from 'react';
import axios from "axios";
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Navigation from "./Navigation";

class AddOrEditBooks extends Component {
  emptyBook = {
    bookName: "",
    bookEnglishName:"",
    bookAuthor:"",
    bookDescription: "",
    bookCategory:"",
    bookPrice:"",
    bookWebsite:"",
    bookPicture:"" 
  };

  constructor(props) {
    super(props);
    this.state = { 
      item: this.emptyBook,
      id : this.props.match.params.id,
      put: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.id !== 'new') {
    this.getBookInfo();
    }
  
  }
async getBookInfo(){
try {
 const book= await axios.get(`/book_store/v1/books/${this.state.id}`)
//  https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/books/${this.state.id}
  this.setState({item:book.data});}
  catch(error){console.log(error)};
  this.setState({put:true})
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

if(this.state.put===true){
  axios.put(`/book_store/v1/books/${this.state.id}`, this.state.item)
//   https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/books/${this.state.id}
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    }

  else{
      axios.post('/book_store/v1/books/', this.state.item)
    //   https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/books/
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({ item: this.emptyBook})

  }
  }

  render() {
    const {item} = this.state;
    const title = <h2>{item.id ? 'Edit books' : 'Add books'}</h2>;
    return <div>
    <Navigation />
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="bookName">book name</Label>
            <Input type="text" name="bookName" id="bookName" value={item.bookName || ''}
                   onChange={this.handleChange} autoComplete="bookName"/>
          </FormGroup>
          <FormGroup>
            <Label for="bookName">book name in english</Label>
            <Input type="text" name="bookEnglishName" id="bookEnglishName" value={item.bookEnglishName || ''}
                   onChange={this.handleChange} autoComplete="bookEnglishName"/>
          </FormGroup>
          <FormGroup>
            <Label for="bookName">book author</Label>
            <Input type="text" name="bookAuthor" id="bookAuthor" value={item.bookAuthor || ''}
                   onChange={this.handleChange} autoComplete="bookAuthor"/>
          </FormGroup>
          <FormGroup>
            <Label for="bookDescription">book description</Label>
            <textarea type="text" name="bookDescription" id="bookDescription" value={item.bookDescription || ''}
                   onChange={this.handleChange} autoComplete="bookDescription"/>
          </FormGroup>
          <FormGroup>
            <Label for="bookCategory">book category</Label>
            <Input type="text" name="bookCategory" id="bookCategory" value={item.bookCategory || ''}
                   onChange={this.handleChange} autoComplete="bookCategory"/>
          </FormGroup>
          <FormGroup>
            <Label for="bookPrice">book price</Label>
            <Input type="text" name="bookPrice" id="bookPrice" value={item.bookPrice || ''}
                   onChange={this.handleChange} autoComplete="bookPrice"/>
          </FormGroup>
          <FormGroup>
            <Label for="bookWebsite">book website</Label>
            <Input type="text" name="bookWebsite" id="bookWebsite" value={item.bookWebsite || ''}
                   onChange={this.handleChange} autoComplete="bookWebsite"/>
          </FormGroup>
          <FormGroup>
            <Label for="bookPicture">book picturee</Label>
            <Input type="text" name="bookPicture" id="bookPicture" value={item.bookPicture || ''}
                   onChange={this.handleChange} autoComplete="bookPicture"/>
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

export default withRouter(AddOrEditBooks);