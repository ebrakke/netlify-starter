/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Erik Brakke's Starter",
    description: "This is a starter made by Erik",
  },
  plugins: [
    "gatsby-plugin-react-helmet", // Use for better SEO
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}
