import React from "react"

export default function Footer(props) {
  return <div className={`footer ${props.isOpen}`}><div className="footer-content">
    <a href="about.html">about</a><a href="http://accessibility.mit.edu/">accessibility</a><a href="mailto:cast@mit.edu">contact</a>
  </div>
</div>
}
