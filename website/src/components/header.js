import React from "react"

export default function Header(props) {
  return <div className={`header ${props.isOpen}`}>
    <div className="exhibit-info"><a href="/"><img className="exhibit-logo" src="/img/GenerativeUnfoldingsLogo.png" alt="the words 'generative' unfoldings in a stylized sans-serif font" /></a>
      {props.subPara && <p dangerouslySetInnerHTML={{__html: props.subPara}}></p>}</div>
    <div className="mit-info"><a href="https://mit.edu"><img className="mit-logo" src="/img/MIT-logo-with-spelling-design1-small-gray-lightgray.svg" /></a></div></div>
}
