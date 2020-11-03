import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="success" variant="light" expand="lg" collapseOnSelect>
                <Container>
                <Navbar.Brand href="/">Pro-Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link style={{color: 'black'}} href="/"><i className="fas fa-shopping-cart pr-1"></i> Cart</Nav.Link>
                    <Nav.Link style={{color: 'black'}} href="/"><i className="fas fa-user pr-1"></i> Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
