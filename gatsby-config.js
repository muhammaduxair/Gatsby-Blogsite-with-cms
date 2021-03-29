const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  siteMetadata: {
    title: `Gatsby Blogsite`,
    description: `GatsBy Clean Boiler Plate.`,
    author: `Muhammad Uzair`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
