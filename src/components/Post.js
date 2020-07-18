import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from "react-bootstrap"

const Post = (props) => {
  console.log("post componnet")

  console.log(props.Title)


  return (
    <div class="card">

      <div className="row">

        <div className="offset-2 col-md-6">
          <div className="card-title">
            <Link to={`/${props.id}/${props.Title}`} style={{ color: 'deepblue', fontSize: "20px" }}>{props.Title.toUpperCase()}</Link>

          </div>


          <div className="card-body">
            <Image src={props.Image} alt="image not found" />


            <div>{props.Body}</div>

          </div>

        </div>

      </div>


    </div>
  )


}
export default Post;