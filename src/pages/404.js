import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/404.css"

const RANDOM_IMG = "https://source.unsplash.com/collection/175083/640x360";

export default function NotFound() {
  return (
    <Layout>
      <SEO title="404 Not Found" description="ページが見つかりません" />
      <div className="not-found-message">
        <Link to="/">トップページへ</Link>
        <h1>404 Not Found</h1>
        <img src={RANDOM_IMG} className="not-found-image" alt="not found" />
      </div>
    </Layout>
  )
}
