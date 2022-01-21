import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user,logOut}=useFirebase();
    return (
        <>      
            <Navbar bg="light" variant="light" sticky="" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home" className="text-secondary fs-1 fw-bold ">Total Dental Care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end fs-5 text-dark">
                        <Nav.Link as={Link}  to="/home">HOME</Nav.Link>
                        <Nav.Link as={Link} to="/location">LOCATIONS</Nav.Link>
                        <Nav.Link as={Link} to="/doctor">DOCTORS</Nav.Link>
                        <Nav.Link as={Link} to="/careears">CAREERS</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;