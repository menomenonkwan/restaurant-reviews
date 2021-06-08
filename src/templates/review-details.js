import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { hero } from '../styles/home.module.css'
import { content } from '../styles/about.module.css'

export default function ReviewDetails({ data }) {
  const featuredImage = getImage(data.markdownRemark.frontmatter.featuredImg)
  const { html } = data.markdownRemark
  const { title, alt, date } = data.markdownRemark.frontmatter  

  return (
    <Layout>
    <div style={{ display: "grid" }}>
      <GatsbyImage image={featuredImage} alt={alt} 
        style={{
          gridArea: "1/1",
          maxHeight: 500,
        }}
        layout="fullWidth"
        aspectRatio={3 / 1}
      />
      <div className={hero}>
        <div>
          <h1>{title}</h1>
          <h3>{date}</h3>
        </div>
      </div>
    </div>      
    <div className={content} dangerouslySetInnerHTML={{__html: html}} />
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        alt
        title
        date
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, AVIF]
            )
          }
        }
      }
    }
  }
`