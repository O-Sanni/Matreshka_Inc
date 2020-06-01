import React from "react";
import axios from "axios";
import { Container} from 'reactstrap';
import Navigation from "./Navigation";

class RussianBooks extends React.Component{
    constructor(props){
        super(props);
            this.state={
                russianBookList:[]
            }
        }
        componentDidMount(){
        this.getBooks();
        }
        
        async getBooks(){
 
            try{
                let books= await axios.get(`/book_store/v1/books`)
                // https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/books
                this.setState({russianBookList:books.data})
            }
            catch(error){
                console.log(error)
            }
        }
        checkIfExist(){ 
            if(this.state.russianBookList===undefined){}
            else{
                let books=this.state.russianBookList.map(res=> {
                    return (
                        <div className="">
                             <h2 className="">Title: {res.bookName} ({res.bookEnglishName}) </h2> 
                             <p className=""><span class="">Author: </span>{res.bookAuthor}</p>
                             <p className=""><span class="">Description: </span>{res.bookDescription}</p>
                             <p className=""><span class="">Category: </span>{res.bookCategory}</p>
                             <p className=""><span class="">Price: </span>${res.bookPrice}</p>
                             <p className=""><span class="">Buy at: </span><a href={res.bookWebsite}>Direct website</a></p>
                            <img className="" src={res.bookPicture} alt="book image" />
                            </div>
                )})
                return books;
            }
           
        }
        
        render(){
            return(
               <Container>
               <Navigation />
                    {this.checkIfExist()}   
               </Container>
            )
        }
    }

export default RussianBooks;