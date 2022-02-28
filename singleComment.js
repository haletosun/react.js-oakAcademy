import React from "react";
import profile1 from './img/images1.png';
const SingleComment = (props) => {
  console.log(props);
  return ( <div className = "comment" >
    <a href = "/" className = "avatar" >
    <img src = {props.picture}alt = "profile pic" / >
    </a>
    <div className = "content" >
    <a href = "/"className = "author" >                                                      
      { props.name }
    </a>
    <div className = "metadata" >
    <span className = "date" >
    {props.date}
    </span>
    </div>
    {props.text}
    </div>
    </div>

  )
}
export default SingleComment
