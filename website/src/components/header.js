import React from "react"

export default function Header(props) {
  return <div className="header">
    { props.previous && <a href={props.previous}>Previous</a>}
    <h1><a href="/">{props.headerText}</a></h1>
    {props.subHead && <h2> {props.subHead} </h2>}
    {props.subPara && <p dangerouslySetInnerHTML={{__html: props.subPara}}></p>}
  {props.next &&<a href={props.next}>Next</a>}</div>
}
