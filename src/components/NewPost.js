import React from 'react'
import { Button, Form,Navbar,Nav } from 'react-bootstrap'
import { Image } from 'react-bootstrap-icons'
import '../App.css';
import data from './data.json'

console.log("new")

class NewPost extends React.Component {
    render() {
        return (
            <React.Fragment>
            <Navbar bg="light" variant="dark">
            <Navbar.Brand href="/home">
          <img src="./logo192.png" style={{width:100, marginTop: -7,height:50}} />
        
        </Navbar.Brand>
       
        
         <Nav className="mr-auto">
         <Nav.Link style={{color:"black",fontSize:"20px"}}>Write a new post</Nav.Link>
                     </Nav> 
                     <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Item><Nav.Link href="/">Edit</Nav.Link></Nav.Item> 
                  {/* <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item> */}
                </Nav>
              </Navbar.Collapse>
               
    
  </Navbar>
            <div className="row">
                <div className="offset-2 col-sm-6">
                    <div className="card">
                        <div className="card-header">
                            <Button variant="info">Add a cover Image</Button>
                        </div>
                        <div className="card-title">
                            <Form style={{marginLeft:"20px"}}>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{fontWeight:"bold",fontSize:"40px",color:"gray"}}>New post title here...</Form.Label>
                                    <Form.Control as="textarea" rows="2" />
                                </Form.Group>
                            
  <Form.File 
    label="Upload Image"
    custom
  />
</Form>
                        </div>
                        <div className="card-body">
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{fontWeight:"bold",fontSize:"20px"}}>Write here Post content here..</Form.Label>
                                    <Form.Control as="textarea" rows="6" />
                                </Form.Group>
                            </Form>

                        </div>
                      
                    </div><br/>
                    <Button variant="primary">Publish</Button>

                </div>

            </div>
            </React.Fragment>

        )
    }
}

export default NewPost