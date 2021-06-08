const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: '/reviews/' + node.frontmatter.slug,
      component: path.resolve(`./src/templates/review-details.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}