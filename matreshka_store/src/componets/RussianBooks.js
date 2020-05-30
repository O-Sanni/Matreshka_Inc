import React from "react";
import axios from "axios";
import { Button, Input, FormGroup, Label, Container} from 'reactstrap';

class RussianBooks extends React.Component{
    constructor(props){
        super(props);
            this.state={
                russianBookList:[],
            }
        }
        componentDidMount(){
        this.getBooks();
        }
        
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
        
        checkIfExist(){ 
            let colors= ["secondary","success","primary","info", "light"];
            if(this.state.bookList===undefined){}
            else{
                console.log(this.state.bookList)
                let books=this.state.bookList.map(res=> {
                    let buyLinks=res.buy_links.map(res=>{return <div><Badge href={res.url} color={Math.random()}>Buy from {res.name}<br/></Badge></div>
                     })
                    return (
                        <div className="">
                             <h2 className="">Title: {res.title} <Badge color="success">Rank #{res.rank}</Badge> </h2> 
                             <p className=""><span class="">Author: </span>{res.author}</p>
                            <p className=""><span class="">Publisher: </span>{res.publisher}</p>
                             <p className=""><span class="">Description: </span>{res.description}</p>
                            <img className="" src={res.book_image} alt="dish image" />
                            <div>{buyLinks}</div>
                            </div>
        
                )})
                console.log(books)
                return books;
            }
        }
        
        render(){
            return(
               <Container>
                    {this.checkIfExist()}   
               </Container>
            )
        }
    }

export default RussianBooks;