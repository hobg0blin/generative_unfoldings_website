import React from "react"
import Layout from "../components/layout"
import Menu from "../components/menu"
import Footer from "../components/footer"
import ArtistData from "../../static/data/work_info.json"
let artists = ArtistData.works
export default function Home() {
  return <Layout header="Generative Unfoldings" subPara="Consequntur et in dolores accusamus ex iure a. Libero distinctio est atque et voluptates autem. Repellendus distinctio et a voluptatem ut iste ut pariatur. Dolor eum dolor non animi adipisci. Ut non tempora voluptate ut non magnam hic et. Et consectetur necessitatibus voluptas dolorem ut non aut voluptatem. <a href='about'>About.</a>">
    <Menu items={artists}></Menu>
    <Footer className="footer"></Footer>
    </Layout>
}
