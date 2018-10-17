import React from 'react'
import '../../../css/teacher.styl'

function Teacher(props){
  return(
    <li className="Teacher">
      {props.name} <a href={`http://www.twitter.com/${props.twitter}`}>{props.twitter}</a>
    </li>
  )
}

export default Teacher
