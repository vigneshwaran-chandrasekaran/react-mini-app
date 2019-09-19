import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';

export default function Header(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Movie Catalog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form className='w-75' onSubmit={props.onSubmitHandle} >
                    <FormControl
                        value={props.searchTerm}
                        onChange={props.searchOnChange}
                        type="text"
                        placeholder="Search movie"
                        className="mr-sm-2" />
                </Form>
                <Nav className="mr-auto">
                    <NavDropdown title="Vigneshwaran" id="basic-nav-dropdown">
                        <NavDropdown.Item>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
