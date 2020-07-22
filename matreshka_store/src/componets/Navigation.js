import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem}  from 'reactstrap';
import "../styles/NaviagtionAndFooter.scss"


function Navigation(){
    return (
            <Nav id="navigation">
                <NavItem>
                    <Link className="class-link" to="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link className="class-link" to="/bestsellers">New York Times Bestsellers</Link>
                </NavItem>
                <NavItem>
                    <Link className="class-link" to="/from_russia_gifts">Gifts from Russia</Link></NavItem>
                <NavItem>
                    <Link className="class-link" to="/from_russia_books">Books from Russia</Link></NavItem>
                <NavItem>
                    <Link className="class-link" to="/requests">Requests</Link></NavItem>
                <NavItem>
                    <Link className="class-link" to="/admin">Admin</Link></NavItem>
                <NavItem>
                    <Link className="class-link" to="/subscribe">Subscribe</Link></NavItem>
            </Nav>
    )
}

export default Navigation;
