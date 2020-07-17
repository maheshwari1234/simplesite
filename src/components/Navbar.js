import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Card, Image,NavDropdown } from 'react-bootstrap'




class Navbarr extends React.Component {
    constructor() {
        super()
        this.state = {
            word: ""
        }
    }

    handleChange = (word) => {
        console.log("word", word)
    }

    render() {
        return (

            <Navbar bg="secondary" variant="dark">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.word} onChange={() => { this.handleChange(this.state.word) }} />
                </Form>
                <Nav className="mr-auto">
                    <Nav.Link href="/posts">Post</Nav.Link><br />
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/posts/:search">React</NavDropdown.Item>
        <NavDropdown.Item href="/posts/:search">Angular</NavDropdown.Item>
        <NavDropdown.Item href="/posts/:search">Javascript</NavDropdown.Item>
    
      </NavDropdown>
                </Nav>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/new" style={{ color: "yellow" }}>Write a Post</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/login" style={{ color: "yellow" }}>Login</Nav.Link></Nav.Item>
                      
                    
                    </Nav>
                </Navbar.Collapse>


            </Navbar>

        )

    }


}

export default Navbarr;