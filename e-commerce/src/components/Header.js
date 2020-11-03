import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <Navbar bg="success" variant="light" expand="lg" collapseOnSelect>
                <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Pro-Shop</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <LinkContainer style={{color: 'black'}} to="/cart">
                        <Nav.Link>
                            <i className="fas fa-shopping-cart pr-1"></i> Cart
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer style={{color: 'black'}} to="/login">
                        <Nav.Link>
                            <i className="fas fa-user pr-1"></i> Sign In
                        </Nav.Link>
                    </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
