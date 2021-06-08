import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import MediaCard from '../components/Card'
import { grid } from '../styles/home.module.css'
import { graphql, Link } from 'gatsby'

export default function HomePage({ data }) {
  const reviews = data.allMarkdownRemark.nodes;

  return (
    <Layout pageTitle="Home Page">   
      <Hero />
      <div className={grid}>
        {reviews.map(review => (
          <Link to={"/reviews/" + review.frontmatter.slug} key={review.id}>
          <MediaCard info={review.frontmatter}/>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Reviews {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          slug
          title
          description
          alt
          thumb {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
        id
      }
    }
  }  
`;