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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "My Gatsby Site",
        short_name: "GatsbySite",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#663399",
        display: "standalone",
        icon: "src/images/icon.svg",
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        production: true,
        disable: false,
        generateStatsFile: true,
        analyzerMode: "static",
        reportFilename: "bundle-report.html",
        statsFilename: "bundle-stats.json",
      },
    },
  ],
}
