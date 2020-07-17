import React from 'react'
import {Link} from 'react-router-dom'

const Post=(props)=>{
  console.log("post componnet")
    
  console.log(props.title)
 
    
    return(
            <div class="card">
               
              <div className="row">
              
                <div className="col-md-6">
                <div className="card-body">
    
    <Link to={`/${props.id}/${props.title}`} style={{color:'blue'}}>{props.title.toUpperCase()}</Link>
    <p className="card-body">{props.body}</p>
    
  </div>

                </div>

              </div>
 
  
</div>  
)

    
}
export default Post;