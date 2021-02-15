import React, { useState } from "react"
import Header from './header.js'

export default function WorkHeader(props) {
  console.log('header props: ', props)
  let open = props.headerState
  function handleChange() {
    props.onClick(!open);
  }
  return <div><Header isOpen={ open ? "open" : "closed"}></Header><div className={`header work-header ${ open ? "open" : "closed" }`}>
    <a onClick= {handleChange} className={`icon-show-hide ${open ? "hide-header": "show-header"}`}></a>
  <div>{ props.previous && <a className="previous" href={props.previous}>Previous</a>}</div>
  <div className="info"><h1>{props.headerText}</h1>
    {props.subHead && <h2><a href={`/about#${ props.subHead.replace(/ /g,'') }`}> {props.subHead}</a> </h2>}
    {props.subPara && <p> {props.subPara} </p>}</div>
  {props.next &&<div><a className="next" href={props.next}>Next</a></div>}
  </div></div>
}

WorkHeader.defaultProps = {
  open: true
}
