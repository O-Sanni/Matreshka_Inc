import React, { Component } from 'react';
import axios from "axios";
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import Navigation from "./Navigation";
import "../styles/AdminAddEdit.scss"

class AddOrEditGifts extends Component {

  emptyGift = {
    giftName: "",
    giftDescription: "",
    giftPrice:"",
    giftWebsite:"",
    giftPicture:"" 
  };

  constructor(props) {
    super(props);
    this.state = { 
      item: this.emptyGift,
      id : this.props.match.params.id,
      put: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //call getBookInfo function if user choose to edit gift information
  componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      this.getGiftInfo();
    }
  }

//search gift information by specific id
  async getGiftInfo(){
    try {
      const gift= await axios.get(`https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/gifts/${this.state.id}`)
      //  book_store/v1/gifts/${this.state.id}
      this.setState({item:gift.data});}
    catch(error){console.log(error)};
      this.setState({put:true})
}

//set up state after user enter information
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

//will add new gift or update current gift
  async handleSubmit(event) {
    event.preventDefault();
    if(this.state.put===true){
      axios.put(`/book_store/v1/gifts/${this.state.id}`, this.state.item)
        // https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/gifts/${this.state.id}
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else{
      axios.post(`/book_store/v1/gifts/`, this.state.item)
        // https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/gifts/
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      this.setState({ item: this.emptyGift});
    }
  }

  render() {
    const {item} = this.state;
    const title = <h2 className="h2-update-add-gift">{item.id ? 'Edit Gifts' : 'Add Gifts'}</h2>;
    return (
          <div id="main-div-add-update-gift">
            <Navigation />
              <Container id="gift-container-update">
                {title}
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label className="gift-update-display-lable" for="giftName">Gift name</Label>
                    <Input className="input-gift-class" type="text" name="giftName" id="giftName" value={item.giftName || ''}
                    onChange={this.handleChange} autoComplete="giftName"/>
                  </FormGroup>
                  <FormGroup>
                    <Label className="gift-update-display-lable" for="giftDescription">Gift description</Label>
                    <Input className="input-gift-class" type="text" name="giftDescription" id="giftDescription" value={item.giftDescription || ''}
                    onChange={this.handleChange} autoComplete="giftDescription"/>
                  </FormGroup>
                  <FormGroup>
                    <Label className="gift-update-display-lable" for="giftPrice">Gift price</Label>
                    <Input className="input-gift-class" type="text" name="giftPrice" id="giftPrice" value={item.giftPrice || ''}
                    onChange={this.handleChange} autoComplete="giftPrice"/>
                  </FormGroup>
                  <FormGroup>
                    <Label className="gift-update-display-lable" for="giftWebsite">Gift website</Label>
                    <Input className="input-gift-class" type="text" name="giftWebsite" id="giftWebsite" value={item.giftWebsite || ''}
                    onChange={this.handleChange} autoComplete="giftWebsite"/>
                  </FormGroup>
                  <FormGroup>
                    <Label className="gift-update-display-lable" for="giftPicture">Gift picturee</Label>
                    <Input className="input-gift-class" type="text" name="giftPicture" id="giftPicture" value={item.giftPicture || ''}
                    onChange={this.handleChange} autoComplete="giftPicture"/>
                  </FormGroup>
                  <FormGroup>
                    <Button className="save-button" color="primary" type="submit">Save</Button>{' '}
                    <Button className="cancel-button" color="secondary" tag={Link} to="/admin">Cancel</Button>
                  </FormGroup>
                </Form>
            </Container>
          </div>)
  }
}

export default withRouter(AddOrEditGifts);