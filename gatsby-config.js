module.exports = {
  siteMetadata: {
    title: "Department of Mathematics",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Department of Mathematics",
        short_name: "Dmaths",
        start_url: "/",
        background_color: "#fafafa",
        theme_color: "#fafafa",
        display: "standalone",
        icon: "src/images/icon.png",
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    "gatsby-plugin-no-sourcemaps",
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/Layout.tsx`),
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
