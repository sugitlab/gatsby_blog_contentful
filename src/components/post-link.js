import React from "react"
import "../styles/post-link.css"

const RANDOM_IMG = "https://source.unsplash.com/collection/175083/640x360"

export default function PostLink() {
  return (
    <div className="post-link">
      <div>
        <img src={RANDOM_IMG} className="post-link-image" alt="post-cover"></img>
      </div>
      <div className="post-link-text">
        <h2> Gatsby Hosting Blog</h2>
        <p className="post-link-body">
          Gatsby Getting Startted
        </p>
        <p className="post-link-date">
          2021/3/16
        </p>
      </div>
    </div>
  )
}