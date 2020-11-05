import React, { Component } from 'react';
import axios from "axios";
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Navigation from "./Navigation";
import "../styles/AdminAddEdit.scss"

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

//call getBookInfo function if user choose to edit book
  componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      this.getBookInfo();
    }
  
  }

  //search book information by specific id
  async getBookInfo(){
  try {
    const book= await axios.get(`https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/books/${this.state.id}`)
    // book_store/v1/books/${this.state.id}
    this.setState({item:book.data});}
  catch(error){console.log(error)};
    this.setState({put:true})
}

//set up state after user enter information
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item}; //Spread Operator :allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected
    item[name] = value; //for each name in the item list gives specific value for this name
    this.setState({item}); //set a new state 
  }

  //will add new book or update current book
  async handleSubmit(event) {
    event.preventDefault();
    if(this.state.put===true){
      axios.put(`https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/books/${this.state.id}`, this.state.item)
      // book_store/v1/books/${this.state.id}
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
    else{
      axios.post('https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/books/', this.state.item)
      // book_store/v1/books/
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
    const title = <h2 className="h2-update-add-book">{item.id ? 'Edit books' : 'Add books'}</h2>;

  return (
        <div id="main-div-add-update-book">
          <Navigation />
            <Container id="book-container-update">
              {title}
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label className="book-update-display-lable" for="bookName">Book name</Label>
                  <Input className="input-book-class" type="text" name="bookName" id="bookName" value={item.bookName || ''}
                  onChange={this.handleChange} autoComplete="bookName"/>
                </FormGroup>
                <FormGroup>
                  <Label className="book-update-display-lable" for="bookName">Book name in english</Label>
                  <Input className="input-book-class" type="text" name="bookEnglishName" id="bookEnglishName" value={item.bookEnglishName || ''}
                  onChange={this.handleChange} autoComplete="bookEnglishName"/>
                </FormGroup>
                <FormGroup>
                  <Label className="book-update-display-lable" for="bookName">Book author</Label>
                  <Input className="input-book-class" type="text" name="bookAuthor" id="bookAuthor" value={item.bookAuthor || ''}
                  onChange={this.handleChange} autoComplete="bookAuthor"/>
                </FormGroup>
                <FormGroup>
                  <Label className="book-update-display-lable" for="bookDescription">Book description</Label>
                  <Input className="input-book-class" type="text" name="bookDescription" id="bookDescription" value={item.bookDescription || ''}
                  onChange={this.handleChange} autoComplete="bookDescription"/>
                </FormGroup>
                <FormGroup>
                  <Label className="book-update-display-lable" for="bookCategory">Book category</Label>
                  <Input className="input-book-class" type="text" name="bookCategory" id="bookCategory" value={item.bookCategory || ''}
                  onChange={this.handleChange} autoComplete="bookCategory"/>
                </FormGroup>
                <FormGroup>
                  <Label className="book-update-display-lable" for="bookPrice">Book price</Label>
                  <Input className="input-book-class" type="text" name="bookPrice" id="bookPrice" value={item.bookPrice || ''}
                  onChange={this.handleChange} autoComplete="bookPrice"/>
                </FormGroup>
                <FormGroup>
                  <Label className="book-update-display-lable" for="bookWebsite">Book website</Label>
                  <Input className="input-book-class" type="text" name="bookWebsite" id="bookWebsite" value={item.bookWebsite || ''}
                  onChange={this.handleChange} autoComplete="bookWebsite"/>
                </FormGroup>
                <FormGroup>
                  <Label className="book-update-display-lable" for="bookPicture">Book picture</Label>
                  <Input className="input-book-class" type="text" name="bookPicture" id="bookPicture" value={item.bookPicture || ''}
                  onChange={this.handleChange} autoComplete="bookPicture"/>
                </FormGroup>
                <FormGroup>
                  <Button className="save-button" color="primary" type="submit">Save</Button>{' '}
                  <Button className="cancel-button" color="secondary" tag={Link} to="/admin">Cancel</Button>
                </FormGroup>
              </Form>
          </Container>
        </div>
  )}
}

export default withRouter(AddOrEditBooks);