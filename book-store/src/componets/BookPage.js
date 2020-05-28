import React from "react"
import BookSearch from "./BookSearch"

class BookPage extends React.Component{
constructor(props){
    super(props);
    this.state={
        type_of_book: "",
        search: false
    }
    this.getType=this.getType.bind(this);
    this.submitButton=this.submitButton.bind(this);
}


render(){
    
}

}
