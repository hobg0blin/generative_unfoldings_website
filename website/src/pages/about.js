import React, {useEffect} from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import ArtistData from "../../static/data/work_info.json"
import about from "../../static/data/about.json"
let artists = ArtistData.works
export default function About() {
  useEffect(() => {
    if (window.location.hash) {
    let anchor = document.querySelector(window.location.hash)
        console.log('anchor: ', anchor)
        anchor.scrollIntoView({behavior: "smooth", block: "start"})
  }
  })

  return <Layout header="Generative Unfoldings" subPara="">
    <div className="about" >
      <p dangerouslySetInnerHTML={{__html: about.about}}></p>
    <ul>
      { artists.map(artist => (
        <li>
          <a className="artistBio" id = {artist.artist.replace(/ /g, '')} href={`#${artist.artist.replace(/ /g, '')}`}> { artist.name } -{artist.artist}</a>
        <br/>
        <p dangerouslySetInnerHTML={{__html: artist.bio}}></p>
      </li>
      ))
      }
    </ul>

    </div>
    <Footer></Footer>
    </Layout>

}
