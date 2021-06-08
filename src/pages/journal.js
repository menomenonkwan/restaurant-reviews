import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import { hero } from '../styles/home.module.css'

export default function Journal() {
  return (
    <Layout pageTitle="Journal">
      <div style={{ display: "grid" }}>
        <StaticImage
          style={{
            gridArea: "1/1",
            maxHeight: 500,
          }}
          layout="fullWidth"
          aspectRatio={3 / 1}
          alt=""
          src={"../images/journal.jpg"}
          formats={["auto", "webp", "avif"]}
        />
        <div className={hero}>
          <div>
            <h1>Food Journal</h1>
            <h3>tips, thoughts, and upcoming eats</h3>
          </div>
        </div>
      </div>
    </Layout>
  )
}
