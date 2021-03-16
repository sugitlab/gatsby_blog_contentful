import React from "react"
import "../styles/hero.css"
import LOGO_IMG from "../../static/logo.png"

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero-text">
        Welcome to my blog
      </h1>
      <div className="hero-author">
        <img src={LOGO_IMG} className="hero-author-image" alt="avatar"></img>
        <p className="hero-author-text">
          Designed by Sugit. <br />
          FullPeratto Engineer.
        </p>
      </div>
    </div>
  )
}