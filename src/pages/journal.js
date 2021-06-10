import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import { hero } from '../styles/home.module.css'
import { graphql } from 'gatsby'
import { journal, description } from '../styles/journal.module.css'
import { motion } from 'framer-motion'

export default function Journal({ data }) {
  const journals = data.allMarkdownRemark.edges;
 
  return (
    <Layout pageTitle="Journal">
      <div style={{ display: "grid" }}>
        <StaticImage
          style={{
            gridArea: "1/1",
            maxHeight: 400,
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
      <div className={journal}>
        {journals.map(journal => (
          <motion.div 
            whileHover={{ scale:1.025 }} 
            whileTap={{ scale: 0.9975 }}
            transition={{ duration: 0.3 }}
          >
            <h1>{journal.node.frontmatter.title}</h1>
            <h3>{journal.node.frontmatter.date}</h3>
            <div className={description} dangerouslySetInnerHTML={{__html: journal.node.html}} />
          </motion.div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Journals {
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "journal"}}}
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
        html
        }
      }
    }
  }
`;