import React from "react";
import {Route, Switch, Link , BrowserRouter as Router} from "react-router-dom";
import { Nav, NavItem}  from 'reactstrap';
import Subscribe from "./Subscribe";
import BookPage from "./BookPage";
import Requests from "./Requests";
import RussianBooksAndGifts from "./RussianBooksAndGifts";
import AdminsPage from "./AdminsPage";



function Navigation(){
    return (
        <Router>
            <Nav id="navigation">
                <NavItem>
                <Link className="class-link" to="/">Home</Link>
                </NavItem>
                <NavItem><Link className="class-link" to="/bestsellers">New York Times Bestsellers</Link>
                </NavItem>
                <NavItem><Link className="class-link" to="/subscribe">Subscribe</Link></NavItem>
                <NavItem><Link className="class-link" to="/from_russia">Gifts and Books from Russia</Link></NavItem>
                <NavItem><Link className="class-link" to="/orders">Requests</Link></NavItem>
            </Nav>
            <Switch>
                {/* <Route exact path="/" component={}></Route>  */}
                <Route exact path="/bestsellers" component={BookPage}></Route>
                <Route exact path="/subscribe" component={Subscribe} ></Route>
                <Route exact path="/from_russia" component={RussianBooksAndGifts}></Route>
                <Route exact path="/orders" component={Requests} ></Route>
                {/* <Route exact path="/admin" component={AdminsPage} ></Route> */}
            </Switch>
        </Router>
    )
}

export default Navigation;
