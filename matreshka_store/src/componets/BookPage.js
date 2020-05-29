import React from "react"
import BookSearch from "./BookSearch"
import { Button, Input, FormGroup, Label, ButtonGroup, InputGroup, Container} from 'reactstrap';


class BookPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
           submitButton: false,
            typeSearch: "hardcover-fiction" 
        }
        this.handleChoice= this.handleChoice.bind(this);
        this.submitButton=this.submitButton.bind(this);
    }  
  
  
    handleChoice(event){
        event.preventDefault(); //prevent default behavior after you choose language
        this.setState({typeSearch: event.target.value})
    }
  
    //will setState textInput to true in order to make a translation
    submitButton(event){
      event.preventDefault();
      this.setState({submitButton: true});
    }
  
     render(){
          return (
                  <Container id="main-div-transl-page">
                    <FormGroup id="translate-box">
                        <Label for="options-language" id="select-lable"> 
                         Please choose type of book:
                          <Input type="select"  id="select-transl" value={this.state.value} onChange={this.handleChoice}>
                            <option className="options-search-class" value="hardcover-fiction">Hardcover Fiction</option>
                            <option className="options-searchclass" value="paperback-nonfiction">Paperback Nonfiction</option>
                            <option className="options-search-class" value="e-book-fiction">E-book Fiction</option>
                            <option className="options-search-class" value="e-book-nonfiction">E-book Nonfiction</option>
                          </Input>
                        </Label>
                        </FormGroup>
                          <Button  id="input-submit-transl" type="button" onClick={this.submitButton}>Submit</Button>
                      {this.state.submitButton ? (<BookSearch typeSearch={this.state.typeSearch} />) : ""}
                    </Container>

          )}
}

export default BookPage;
