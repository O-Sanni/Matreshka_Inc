import React from "react";
import {Route, Switch,  BrowserRouter as Router} from "react-router-dom";
import Subscribe from "./componets/Subscribe";
import BookPage from "./componets/BookPage";
import Requests from "./componets/Requests";
import AddOrEditGifts from "./componets/AddOrEditGifts";
import AdminsPage from "./componets/AdminsPage";
import AddOrEditBooks from "./componets/AddOrEditBooks";



function App(){
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={BookPage}></Route> 
                <Route exact path="/bestsellers" component={BookPage}></Route>
                <Route exact path="/subscribe" component={Subscribe} ></Route>
                <Route exact path="/requests" component={Requests} ></Route>
                <Route path="/add-update-gifts/:id" exact={true} component={AddOrEditGifts}></Route>
                <Route path="/add-update-Books/:id" exact={true} component={AddOrEditBooks}></Route>
                <Route exact path="/admin" component={AdminsPage} ></Route>
            </Switch>
        </Router>
    )
}

export default App;