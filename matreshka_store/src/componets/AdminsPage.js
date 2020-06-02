import React from "react";
import axios from "axios";
import { Button, ButtonGroup }  from 'reactstrap';
import Navigation from "./Navigation";
import { Link } from "react-router-dom";


class AdminsPage extends React.Component{
constructor(props){
    super(props);

        this.state = {russianBooks: [], russianGifts:[], subscribe:[], requests:[]};

        this.removeGifts = this.removeGifts.bind(this);
        this.removeBooks = this.removeBooks.bind(this);
        this.removeRequest = this.removeRequest.bind(this);
        this.removeSubscription = this.removeSubscription.bind(this);

    }
  componentDidMount() {
this.getGiftsInfo();
this.getBooksInfo();
this.getRequests();
this.getSubscribe();
  }

  async getGiftsInfo(){
    try{
        let giftsData= await axios.get(`https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/gifts`)
        this.setState({russianGifts:giftsData.data})
    }
    catch(error){
        console.log(error)
    }
}
async getBooksInfo(){
    try{
        let booksData= await axios.get(`https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/books`)
        this.setState({russianBooks:booksData.data})
    }
    catch(error){
        console.log(error)
    }
}
async getSubscribe(){
    try{
        let subscribeData= await axios.get(`https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/subscribe`)
        this.setState({subscribe:subscribeData.data})
    }
    catch(error){
        console.log(error)
    }
}
async getRequests(){
    try{
        let requestsData= await axios.get(`https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/requests`)
        this.setState({requests:requestsData.data})
    }
    catch(error){
        console.log(error)
    }
}

async removeSubscription(id) {
    axios.delete(`https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/subscribe/${id}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async removeBooks(id) {
    axios.delete(`https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/books/${id}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  async removeGifts(id) {
    axios.delete(`https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/gifts/${id}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
  async removeRequest(id) {
    axios.delete(`https://cors-anywhere.herokuapp.com/https://matreshka-database.herokuapp.com/book_store/v1/requests/${id}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

checkBooks(){
if(this.state.russianBooks===undefined){}
else{
    const russianBooksList = this.state.russianBooks.map(book => {
        return <div className="info-divs-return">
        <p className="admin-page-p" >Book ID: #{book.id}</p>
        <p className="admin-page-p">Title: {book.bookName} ({book.bookEnglishName}) </p> 
        <p className="admin-page-p">Author: {book.bookAuthor}</p>
        <p className="admin-page-p">Price: ${book.bookPrice}</p>
            <ButtonGroup>
            <Button className="admin-buttons-class" size="sm" color="primary" tag={Link} to={"/add-update-books/" + book.id}>Edit</Button> 
              <Button className="admin-buttons-class" size="sm" color="danger" onClick={() => this.removeBooks(book.id)}>Delete</Button>
            </ButtonGroup></div>
      });
      return russianBooksList;
}
}
checkGifts(){
    if(this.state.russianGifts===undefined){}
            else{
                const gifts=this.state.russianGifts.map(gift=> {
                    return (
                        <div className="info-divs-return">
                             <p className="admin-page-p" >Gift ID: #{gift.id}</p>
                             <p className="admin-page-p">Name: {gift.giftName}</p> 
                             <p className="admin-page-p">Price: ${gift.giftPrice}</p>
                             <ButtonGroup>
                       <Button className="admin-buttons-class" size="sm" color="primary" tag={Link} to={"/add-update-gifts/" + gift.id}>Edit</Button> 
                      <Button className="admin-buttons-class" size="sm" color="danger" onClick={() => this.removeGifts(gift.id)}>Delete</Button>
                    </ButtonGroup>
                             </div>)});
          return gifts;
    }
    }

 
checkRequests(){
        if(this.state.requests===undefined){}
        else{
            const requestsList = this.state.requests.map(request => {
                return <div className="info-divs-return">
                <p className="admin-page-p">Request ID: #{request.id} </p> 
                <p className="admin-page-p">Requester's name: {request.requesterName} </p> 
                <p className="admin-page-p">Requester's email:{request.requesterEmail}</p>
                <p className="admin-page-p">Requester's phone number:{request.requesterPhoneNumber}</p>
                <p className="admin-page-p">Name of item:{request.itemName}</p>
                <p className="admin-page-p">Name of item in English:{request.englishItemName}</p>
                <p className="admin-page-p">Request date:{request.requestDate}</p>
                <p className="admin-page-p">Date completed:{request.dateCompleted}</p>
                    <ButtonGroup>
                    <Button className="admin-buttons-class" size="sm" color="primary" tag={Link} to={"/update-requests/" + request.id}>Edit</Button> 
                      <Button className="admin-buttons-class" size="sm" color="danger" onClick={() => this.removeRequest(request.id)}>Delete</Button>
                    </ButtonGroup>
                    </div>
              });
              return requestsList;
        }
        }
    
checkSubscription(){
            if(this.state.subscribe===undefined){}
            else{
                const subscriptions = this.state.subscribe.map(subscription => {
                    return <div className="info-divs-return">
                     <p className="admin-page-p" >Subscription ID: #{subscription.id}</p>
                    <p className="admin-page-p">Email: {subscription.email}  </p> 
                    <p className="admin-page-p">Full name {subscription.fullName}  </p> 
                    <p className="admin-page-p">Age: {subscription.age}</p>
                        <ButtonGroup>
                          <Button className="admin-buttons-class" size="sm" color="danger" onClick={() => this.removeBooks(subscription.id)}>Delete</Button>
                        </ButtonGroup></div>
                  });
                  return subscriptions;
            }
            }

  render() {
      return(<div>
     <Navigation />
     <div id="buttons-admin-add">
      <Button className="add-buttons" tag={Link} to="/add-update-books/new">Add Book</Button>
      <Button className="add-buttons" tag={Link} to="/add-update-gifts/new">Add Gift</Button>
 </div>
      <h1 className="h1-admin-page">List of Books</h1>
<div className="info-divs">
{this.checkBooks()}</div>
<h1 className="h1-admin-page">List of Gifts</h1>
<div className="info-divs">
{this.checkGifts()}</div>
<h1 className="h1-admin-page">List of Requests</h1>
<div className="info-divs">{this.checkRequests()}</div>
<h1 className="h1-admin-page">List of Subscriptions</h1>
<div className="info-divs">
{this.checkSubscription()}</div>

       </div>
     );
   }
 }


export default AdminsPage;


