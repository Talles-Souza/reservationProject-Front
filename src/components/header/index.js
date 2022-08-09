import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container style={{ justifyContent: 'center' }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center" style={{ justifyContent: 'center' }}>
                    <Nav style={{ gap: '5rem' }} >
                        <Nav.Link href="#home" >Curiosidades</Nav.Link>
                        <Nav.Link href="#link">Sobre</Nav.Link>
                        <Nav.Link href="#link">Contatos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

