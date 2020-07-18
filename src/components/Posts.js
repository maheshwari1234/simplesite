import React from 'react';
import axios from 'axios'
import Post from "./Post"
import Navbar from "./Navbar";
import PostData from "./postdata.json"
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
        const postArray=PostData.map((post)=>{
            return <Post id={post.id} Title={post.Title} Body={post.Body} Image={post.Image}/>
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