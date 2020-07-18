import React from 'react'
import { Button, Form, Navbar, Nav } from 'react-bootstrap'
import { Image } from 'react-bootstrap-icons'
import '../App.css';
import data from './postdata.json'
import Trail from './trail'



class NewPost extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:"",
            body:"",
            course:"",
            image:"",
            submitted:false
        }
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({ ...this.state, [name]: value } )
        // console.log("habld",this.state.title,this.state.body)
    }

    submit=(e)=>{
        e.preventDefault();
        console.log("course",this.state.course)
        console.log("title",this.state.title)
        console.log("body",this.state.body)
        console.log("image",this.state.image)

    const obj={
        "id":4,
        "Course":this.state.course,
        "Title":this.state.title,
        "Body":this.state.body,
        "Image":this.state.image
    }

data.push(obj)
console.log("inserted",data)
this.setState({submitted:true})


    }

    

    render() {
        if(this.state.submitted){
            return<Trail abc={data}/>
        }
        

        return (
            <React.Fragment>
                
                <Navbar bg="light" variant="dark">
                    <Navbar.Brand href="/home">
                        <img src="./logo192.png" style={{ width: 100, marginTop: -7, height: 50 }} />

                    </Navbar.Brand>


                    <Nav className="mr-auto">
                        <Nav.Link style={{ color: "black", fontSize: "20px" }}>Write a new post</Nav.Link>
                    </Nav>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item><Nav.Link href="/new" style={{ color: "black" }}>Edit</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>


                </Navbar>
                <div className="row">
                    <div className="offset-2 col-sm-6">
                        <div className="card">
                            <div className="card-header">
                                <Form>
                                <Form.Label style={{ fontWeight: "bold", fontSize: "20px"}}>Add Course Name here..</Form.Label>

                                <Form.Control as="textarea" type="text" rows="1" onChange={this.handleChange} name="course"/>

                                </Form>
                            </div>
                            <div className="card-title">
                                <Form style={{ marginLeft: "20px" }}>

                                    <Form.Group>
                                        <Form.Label style={{ fontWeight: "bold", fontSize: "40px", color: "gray" }}>New post title here...</Form.Label>
                                        <Form.Control as="textarea" type="text" rows="2" onChange={this.handleChange} name="title"/>
                                    </Form.Group>

                                    <Form.File
                                        label="Upload Image"
                                        custom 
                                        onChange={this.handleChange} name="image"
                                    />
                                </Form>
                            </div>
                            <div className="card-body">
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label style={{ fontWeight: "bold", fontSize: "20px" }} onChange={this.handleChange} value={this.state.body} name="body" >Write here Post content here..</Form.Label>
                                        <Form.Control as="textarea" rows="6"  type="text" onChange={this.handleChange} name="body"/>
                                    </Form.Group>
                                </Form>

                            </div>

                        </div><br />
                        <Button variant="primary" onClick={this.submit}>Publish</Button>

                    </div>

                </div>
            </React.Fragment>

        )
    }
}

export default NewPost