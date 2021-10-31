import React from 'react';
import logoImage from '../image/logo/restaurant-logo-design-removebg-preview.png';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="header">
                <Container>
                    <img className="img-fluid" src={logoImage} alt="" />
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/order">Order</Nav.Link>
                        <Nav.Link as={HashLink} to="/manageorder">Manage Order</Nav.Link>
                        <Nav.Link as={HashLink} to="/addService">Add Service</Nav.Link>
                        {
                            user.email ?
                                <Button className="rounded" onClick={logOut}>Logout</Button>
                                :
                                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text className="text-dark">
                            <small>  Signed in as</small>: <a href="#login" className="text-dark">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;

