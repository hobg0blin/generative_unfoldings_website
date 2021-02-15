import React from "react"

export default function Header(props) {
  return <div className={`header ${props.isOpen}`}>
    <div className="exhibit-info"><h1><a href="/"><img className="exhibit-logo" src="/img/exhibit-logo-1.png" alt="the words 'generative' unfoldings in a stylized sans-serif font" /></a></h1>
      {props.subPara && <p dangerouslySetInnerHTML={{__html: props.subPara}}></p>}</div>
    <div className="mit-info"><a href="https://mit.edu"><img className="mit-logo" src="/img/mit-logo-placeholder.png" /></a></div></div>
}
