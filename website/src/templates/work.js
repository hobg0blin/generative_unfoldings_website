import React, {useState} from "react"
import Layout from "../components/layout.js"
import ArtistData from "../../static/data/work_info.json"
import Footer from "../components/footer.js"

const Work = props => {
  let html = props.pageContext.content
  let i=0
  let index
  let workInfo = ArtistData.works.filter(work => {
    let url = work.url
    if (props.pageContext.url == url) {
      index = i;
      return true;
    }
    i++;
  })[0]
  let prev = index - 1
  let next = index + 1
  console.log('prev', prev)
  console.log('artist: ', workInfo)
  const [headerOpen, setOpen] = useState(true)
  function handleChange(val) {
    setOpen(val)
  }
  return (
    <div className="work"><Layout header= { workInfo.name } previous={prev >= 0 ? `/works/${ArtistData.works[prev].url}/view.html` : null } next={next < ArtistData.works.length ? `/works/${ArtistData.works[next].url}/view.html` : null} headerState = { headerOpen } onClick={handleChange} headerType='work-header' subHead = { workInfo.artist }></Layout> <iframe className={!headerOpen ? "large": ''} srcDoc={html}></iframe><Footer isOpen={headerOpen ? "open" : "closed"}></Footer></div>
  )
}
export default Work

//export const query = graphql`
//  query($path: String!) {
//  allFile(filter: {absolutePath: {eq: $path}}) {
//    edges {
//      node {
//        id
//        absolutePath
//        internal {
//          content
//        }
//      }
//    }
//  }
//}`
