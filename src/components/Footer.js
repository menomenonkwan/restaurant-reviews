import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Footer() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          author
          contact
          copyright
        }
      }
    }
  `);

  const { author, contact, copyright } = data.site.siteMetadata;

  return (
    <footer>
      <p>{contact}</p>
      <p>&copy;{copyright} {author}</p>
    </footer>
  )
}
