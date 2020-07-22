import React from "react";
import "../src/App.scss"
import {Route, Switch,  BrowserRouter as Router} from "react-router-dom";
import Subscribe from "./componets/Subscribe";
import BookPage from "./componets/BookPage";
import Requests from "./componets/Requests";
import AddOrEditGifts from "./componets/AddOrEditGifts";
import AdminsPage from "./componets/AdminsPage";
import AddOrEditBooks from "./componets/AddOrEditBooks";
import RussianGifts from "./componets/RussianGifts";
import RussianBooks from "./componets/RussianBooks";
import UpdateRequests from "./componets/UpdateRequests"; 
import HomePage from "./componets/HomePage"
import Footer from "./componets/Footer";


function App(){
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage}></Route> 
                    <Route exact path="/bestsellers" component={BookPage}></Route>
                    <Route exact path="/subscribe" component={Subscribe} ></Route>
                    <Route exact path="/requests" component={Requests} ></Route>
                    <Route exact path="/from_russia_books" component={RussianBooks} ></Route>
                    <Route exact path="/from_russia_gifts" component={RussianGifts} ></Route>
                    <Route path="/add-update-gifts/:id" exact={true} component={AddOrEditGifts}></Route>
                    <Route path="/add-update-books/:id" exact={true} component={AddOrEditBooks}></Route>
                    <Route path="/update-requests/:id" exact={true} component={UpdateRequests}></Route>
                    <Route exact path="/admin" component={AdminsPage} ></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;