import React, {useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../../images/logo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import './Header.css';

const Header = () => {

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >=100) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <>
            <Container fluid={true} className={navbar ? 'navBackgroundScroll fixed-top' : 'fixed-top mt-5'} id="navScroll">
                <Container className="navBackground">
                    <Navbar expand="lg">
                        <Navbar.Brand href="#home"><img className="nav-logo" src={logo} alt="logo"/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto"> </Nav>
                            <Nav>
                                <Nav.Link className="navItem" href="#home">HOME</Nav.Link>
                                <Nav.Link className="navItem" href="#home">ABOUT</Nav.Link>
                                <Nav.Link className="navItem" href="#home">PRODUCT</Nav.Link>
                                <Nav.Link className="navItem" href="#home">WHY US</Nav.Link>
                                <Nav.Link className="navItem" href="#home">CONTACT US</Nav.Link>
                                <Nav.Link className="navItem" href="#home"><FontAwesomeIcon className="search-icon" icon={faSearch}/></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Container>
        </>
    );
};

export default Header;