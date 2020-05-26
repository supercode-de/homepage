import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Link from 'next/link'

//import './navigation.css';
import JetztAnmdelden from './JetztAnmelden';
//import { HashLink as Link } from 'react-router-hash-link';


class Navigation extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { isOpen: false }

    // }
    // handleOpen = () => {
    //     console.log("Open")
    //     this.setState({ isOpen: true })
    // }

    // handleClose = () => {
    //     console.log("Close")
    //     this.setState({ isOpen: false })
    // }

    render() {
        return (
            <header className="headerNavigation">
                <Navbar bg="light" expand='xl'>
                    <Navbar.Brand className="imageNavigationNormal logo" href="/"><img src="./img/supercode_logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse onClick={this.toggleMenu} id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link smooth className="main-nav" to="kurse#kurse-seite">Was wir bieten</Nav.Link>
                            <Nav.Link smooth className="main-nav" to="bootcamp#bootcamp-seite">Bootcamps</Nav.Link>
                            <Nav.Link smooth className="main-nav" to="workshops#workshop-seite">Workshops</Nav.Link>
                            {/* <NavDropdown
                                title="Was wir bieten"
                                id="basic-nav-dropdown"
                                onMouseEnter={this.handleOpen}
                                onMouseLeave={this.handleClose}
                                expanded={true}>
                                <NavDropdown.Item href="kurse">Überblick</NavDropdown.Item>
                                <NavDropdown.Item href="bootcamp">Bootcamp</NavDropdown.Item>
                                <NavDropdown.Item href="workshops">Workshops</NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link href="events">Events</Nav.Link>
                            {/* <Nav.Link className="navigationAnmeldung" href="" onClick={this.toggleJetztAnmelden}>Jetzt anmelden</Nav.Link> */}
                            <Nav.Link className="navigationAnmeldung" href="" onClick={this.props.toggleJetztAnmelden}>Jetzt anmelden</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Nav.Link className="navigationAnmeldung-small" href="" onClick={this.props.toggleJetztAnmelden}>Jetzt anmelden</Nav.Link>
                <JetztAnmdelden className="nav-jetzt-anmelden" toggleJetztAnmelden={this.props.toggleJetztAnmelden} isHidden={this.props.isHidden} />

            </header >
        );
    }
}



export default Navigation;