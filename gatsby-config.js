module.exports = {
  siteMetadata: {
    title: "Gatsby Site",
    description: "A Gatsby site optimized for performance",
    siteUrl: "https://example.com",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        production: true,
        disable: false,
        generateStatsFile: true,
      },
    },
  ],
}
