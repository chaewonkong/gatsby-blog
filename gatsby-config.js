module.exports = {
  siteMetadata: {
    title: `Leon Kong's Blog`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    }
  ]
};