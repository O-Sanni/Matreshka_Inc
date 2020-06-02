import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Badge} from 'reactstrap';
import "../styles/NYTimesPage.scss"




class BookSearch extends React.Component{
    constructor(props){
    super(props);
        this.state={
            bookList:[],
        }
    }

    componentDidMount(){
        this.getBooks();
    }

 //get list of books
    async getBooks(){
        const key=process.env.REACT_APP_API_KEY_BOOKS_NYT;
        try{
            let booksData= await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${this.props.typeSearch}.json?api-key=${key}`)
            this.setState({bookList:booksData.data.results.books})
        }
        catch(error){
            console.log(error)
        }
    }

//if bookList not undefined return books information
    checkIfExist(){ 
        if(this.state.bookList===undefined){}
        else{
            let books=this.state.bookList.map(res=> {
                let buyLinks=res.buy_links.map(res=>{return <div><a className="a-buy-option" href={res.url}>{res.name}</a></div>
                })
            return (
                <div className="books-div-list">
                    <p className="title-books"><span className="span-books">Title:</span> {res.title} <Badge color="success">Rank #{res.rank}</Badge> </p> 
                    <p className="p-books"><span className="span-books">Author: </span>{res.author}</p>
                    <p className="p-books"><span className="span-books">Publisher: </span>{res.publisher}</p>
                    <p className="p-books"><span className="span-books">Description: </span>{res.description}</p>
                    <p className="span-books"class="span-books">Buy at: </p>
                    {buyLinks}
                    <img className="img-books" src={res.book_image} alt="book image" />  
                </div>
            )})
            return books;
        }
    }

    render(){
        return(
        <div id="books-list">
                {this.checkIfExist()}   
        </div>
        )
    }
}

export default BookSearch;






