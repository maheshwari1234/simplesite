import React, { useState, useEffect } from "react";
import Axios from "axios";

const IndividualPost=(props)=>{
const [post,setPost]=useState({})

console.log("individual post")
console.log("props in ind",props)
useEffect(()=>{
   
    const id=props.match.params.id
    console.log("id is ",id)
    Axios.get("https://jsonplaceholder.typicode.com/posts/"+id).then((res)=>{
        setPost(res.data)
    })
    .catch((err)=>{
        console.log("error",err)
    })
},[])

return(
<div className="row">
    <div className="offset-3 col-md-6">
        <div className="card-title">
<h4 style={{color:"blue"}}>{post.title}</h4>

        </div>
        <div className="card-body">
<h5>{post.body}</h5>

        </div>

    </div>

</div>    
)

}
export default IndividualPost