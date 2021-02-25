import React from "react"
import Layout from "../components/layout"
import Menu from "../components/menu"
import Footer from "../components/footer"
import ArtistData from "../../static/data/work_info.json"
let artists = ArtistData.works
export default function Home() {
  return <Layout header="Generative Unfoldings" subPara="Curated by <a target='_blank' href='https://unfoldingai.mit.edu/panelist/nick-montfort/'>Nick Montfort,</a> poet and MIT professor of digital media, the <i>Generative Unfoldings</i> exhibition consists of fourteen generative software artworks commissioned by the <a target='_blank' href='https://arts.mit.edu/cast/'>MIT Center for Art, Science & Technology (CAST)</a> and co-presented by the MIT <a target='_blank' href='https://tropetank.com/'>Trope Tank</a> in conjunction with the 2021 CAST Symposium, <a target='_blank' href='https://unfoldingai.mit.edu/'>“Unfolding Intelligence.”</a> <a href='about'>Read more.</a><span class='mobile-disclaimer'>These works are designed for, and best viewed on, desktop or laptop computers. <strong>Some works may not function on mobile devices</strong>.</span>">
    <Menu items={artists}></Menu>

    <Footer className="footer"></Footer>
    </Layout>

}
