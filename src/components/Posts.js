import React from 'react';
import axios from 'axios'
import Post from "./Post"
import Navbar from "./Navbar"
class abc extends React.Component{

    constructor(){
        super();
        this.state={
            posts:[],
        }
        this.componentDidMount=()=>{
            axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
                console.log("data recieved",res.data)
                this.setState({posts:res.data.slice(0,10)})
                // this.setState({posts:res.data})

            })
            .catch(err=>{
                console.log(err)
            })

        }
    }

    

    render(){
        const postArray=this.state.posts.map((post)=>{
            return <Post id={post.id} title={post.title} body={post.body}/>
        })
        return(
            <React.Fragment>
            <Navbar></Navbar>
            <div>
                {postArray}
            </div>
            </React.Fragment>
        )

    }
}
export default abc;