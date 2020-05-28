import React from "react";
import axios from "axios";

class BookSearch extends React.Component{
constructor(props){
super(props);
    this.state={
        bookList:[],
        search: false
    }
}

componentDidMount(){
this.getBooks();
}

async getBooks(){
    const key=process.env.REACT_APP_API_KEY_BOOKS_NYT;
    try{
        let booksData= await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=${key}`)
        this.setState({bookList:booksData.data})
        console.log(this.state.bookList);
    }
    catch(error){
        console.log(error)
    }
}
render(){
    return(
        <div id="book-list-main-div">

        </div>
    )
}
}

export default BookSearch;






