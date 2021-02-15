import React from "react"
import Layout from "../components/layout"
import Menu from "../components/menu"
import Footer from "../components/footer"
import ArtistData from "../../static/data/work_info.json"
let artists = ArtistData.works
export default function Home() {
  return <Layout header="" subPara="Curated by poet and MIT professor of digital media, Nick Montfort, the Generative Unfoldings exhibition is a collection of 14 generative software artworks commissioned by the MIT Center for Art, Science & Technology (CAST) and presented in conjunction with the symposium, “Unfolding Intelligence”. <a href='about'>Read more.</a>">
    <Menu items={artists}></Menu>

    <Footer className="footer"></Footer>
    </Layout>

}
