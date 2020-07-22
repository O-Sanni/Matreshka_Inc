import React from "react";
import axios from "axios";
import Navigation from "./Navigation";
import Translation from "./TranslationComponent";
import Footer from "./Footer";
import "../styles/RussianBooksGiftsTranslation.scss"

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
        
//get list of books
    async getBooks(){
        try{
            let books= await axios.get(`https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/books`)
            // book_store/v1/books
            this.setState({russianBookList:books.data})
        }
        catch(error){
            console.log(error)
        }
    }

//if russianBooksList is not undefine return books information to appear on the page
    checkIfExist(){ 
        if(this.state.russianBookList===undefined){}
        else{
            let books=this.state.russianBookList.map(res=> {
                return (
                    <div className="russian-books-div-list">
                        <h3 className="title-russian-books">Title: {res.bookName} ({res.bookEnglishName}) </h3> 
                        <p className="p-russian-books"><span class="span-russian-books">Author: </span>{res.bookAuthor}</p>
                        <p className="p-russian-books"><span class="span-russian-books">Description: </span>{res.bookDescription}</p>
                        <p className="p-russian-books"><span class="span-russian-books">Category: </span>{res.bookCategory}</p>
                        <p className="p-russian-books"><span class="span-russian-books">Price: </span>${res.bookPrice}</p>
                        <p className="p-russian-books"><span class="span-russian-books">Buy at: </span><a className="a-buy-option" href={res.bookWebsite}>Direct website</a></p>
                        <img className="img-russian-books" src={res.bookPicture} alt="book image" />
                    </div>
                )})
            return books;
        }
    }
        
    render(){
        return(
            <div id="main-div-russian-book">
               <Navigation />
               <div id="second-div-russian-books">
                    <h1 id="russian-books-h1">Russian Books</h1>
                    <div id="russian-books-list">
                        {this.checkIfExist()}
                    </div>
                    <div className="russian-pages-translations-div">
                        <p className="p-translation">Translation</p>
                        <Translation  />
                    </div>
                </div> 
                <div className="footer-div">
                    <Footer />
                </div> 
            </div>
        )
    }
}

export default RussianBooks;