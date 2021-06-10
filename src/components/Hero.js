
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { hero } from '../styles/home.module.css'

export default function Hero() {
  return (
    <div style={{ display: "grid" }}>
      <StaticImage
        style={{
          gridArea: "1/1",
          maxHeight: 400,
        }}
        layout="fullWidth"
        aspectRatio={3 / 1}
        alt=""
        src={"../images/hero.jpg"}
        formats={["auto", "webp", "avif"]}
      />
      <div className={hero}>
        <div>
          <h1>
            Restraunt Reviews
          </h1>
          <h3>From your local food joint journeyman, Brannon Lee</h3>
        </div>
      </div>
    </div>
  )
}