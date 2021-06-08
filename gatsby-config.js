module.exports = {
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `reviews`,
        path: `${__dirname}/src/reviews/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: "Brannon's Restaurant Reviews",
    author: 'Brannon Lee',
    copyright: 'Copyright 2021',
    contact: 'brannon@example.com'
  },
};
