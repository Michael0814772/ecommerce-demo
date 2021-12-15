import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function Navigation() {

    const cartObj = useSelector(store => store.cartReducer)

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="nav mx-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/additem">Add Item</Nav.Link>
                    </Nav>
                    <Nav className="nav ms-auto">
                        <Nav.Link href="/cart">Cart: {cartObj.cartItems.length}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation