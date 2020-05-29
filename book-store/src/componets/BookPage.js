import React from "react"
import BookSearch from "./BookSearch"
import { Button, Input, FormGroup, Label, ButtonGroup, InputGroup, Container} from 'reactstrap';


function BookPage(){
// class BookPage extends React.Component{
// constructor(props){
//     super(props);
//     this.state={
//         type_of_book: "",
//         search: false
//     }
//     this.getType=this.getType.bind(this);
//     this.submitButton=this.submitButton.bind(this);
// }

let choice="";
let submitButton=false;
// render(){
    return(
    <Container>
    <Label for="options-books" id="select-lable"> 
    Please choose language:
     <Input type="select"  id="select-transl" value={this.state.value} onChange={this.handleLanguage}>
       <option className="options-lang-class" value="en">English</option>
       <option className="options-lang-class" value="ar">Arabic</option>
       <option className="options-lang-class" value="be">Belarusian</option>
       <option className="options-lang-class" value="bn">Bengali</option>
       <option className="options-lang-class" value="zh">Chinese</option> 
       <option className="options-lang-class" value="nl">Dutch</option>


     </Input>
   </Label>
   <Button  id="input-submit-transl" type="button" onClick={this.submitButton}>Submit</Button>
                       
   <Container id="translation-output-div">
                    {/* use ternary operator, if the textInput is true , if the user entered text and press submitt call <Translation /> 
                    and send  language and text to Translations*/}
                    {this.state.submitButton ? (<BookSearch  choice={choice} />) : ""}
                  </Container>
   </Container>
    )
}

export default BookPage;
