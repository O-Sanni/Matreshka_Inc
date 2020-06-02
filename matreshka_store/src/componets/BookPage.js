import React from "react"
import BookSearch from "./BookSearch"
import { Button, Input, FormGroup, Label, Container} from 'reactstrap';
import Navigation from "./Navigation";
import Translation from "./TranslationComponent";
import Footer from "./Footer";
import "../styles/NYTimesPage.scss"


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
                  <div id="main-div-book-page">
                  <Navigation />
                    <div id="choice-div">
                        <Label for="options-book" id="select-lable"> 
                         Please choose type of book:
                          <Input type="select"  id="select-book" value={this.state.value} onChange={this.handleChoice}>
                            <option className="options-search-class" value="hardcover-fiction">Hardcover Fiction</option>
                            <option className="options-searchclass" value="paperback-nonfiction">Paperback Nonfiction</option>
                            <option className="options-search-class" value="e-book-fiction">E-book Fiction</option>
                            <option className="options-search-class" value="e-book-nonfiction">E-book Nonfiction</option>
                          </Input>
                        </Label>
                          <Button  id="input-submit-transl" type="button" onClick={this.submitButton}>Submit</Button>
                          </div>
                      {this.state.submitButton ? (<BookSearch typeSearch={this.state.typeSearch} />) : ""}
                          <div className="footer-div">
                      <Footer />
                    </div>
</div>
          )}
}

export default BookPage;
