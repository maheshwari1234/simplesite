import React, { useState, useEffect } from "react";
import Axios from "axios";
import {Image} from "react-bootstrap";
import PostData from "./postdata.json"

// console.log("in individual post",PostData.id)

class IndividualPost extends React.Component{
    render(){

        return(

 PostData.map((data,i) => {
     console.log("data in array",data.id)
    if(data.id==this.props.match.params.id){

        return(
          <div className="row">
              <div className="card">
              <div className="offset-2 col-sm-6">
                  <div className="card-title">
        <h2>{data.Title}</h2>

                  </div>
                  <div className="card-body">
        <Image src={`/${data.Image}`} alt="image not found"/><br/><br/>
        <h5>{data.Body}</h5>
                  </div>

              </div>
              
<div></div>
              </div>

        //   </div>

        )

    }
    

                  
              
})


              
            )
    }
}





export default IndividualPost