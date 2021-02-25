import React from "react"

export default function Header(props) {
  return <div className={`header ${props.isOpen} ${props.workHeader ? "work" : ''}`}>
    <div className="exhibit-info"><h1 className="accessibility-tag">{props.headerText}</h1><a href="/"><img className="exhibit-logo" src="/img/GenerativeUnfoldingsLogo.png" alt="the words 'generative' unfoldings in a stylized sans-serif font" /></a>
      {props.subPara && <p dangerouslySetInnerHTML={{__html: props.subPara}}></p>}</div>
    <div className="mit-info"><a href="https://mit.edu"><img className="mit-logo" src="/img/MIT-logo-with-spelling-design1-small-gray-lightgray.svg" alt="The logo for the Massachusetts Institute of Technology: gray rectangular blocks making up the letters MIT.."/></a></div></div>
}
