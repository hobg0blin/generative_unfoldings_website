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

  return <Layout header="Generative Unfoldings" subPara="Consequntur et in dolores accusamus ex iure a. Libero distinctio est atque et voluptates autem. Repellendus distinctio et a voluptatem ut iste ut pariatur. Dolor eum dolor non animi adipisci. Ut non tempora voluptate ut non magnam hic et. Et consectetur necessitatibus voluptas dolorem ut non aut voluptatem. <a href='about'>About.</a>">
    <div className="about" >
      <p dangerouslySetInnerHTML={{__html: about.about}}></p>
    <ul>
      { artists.map(artist => (
        <li>
          <strong>{ artist.name } - <a id = {artist.artist.replace(/ /g, '')} href={`#${artist.artist.replace(/ /g, '')}`}>{artist.artist}</a></strong>
        <br/>
        <p dangerouslySetInnerHTML={{__html: artist.bio}}></p>
      </li>
      ))
      }
    </ul>

    </div>
    <Footer className="footer"></Footer>
    </Layout>
}
