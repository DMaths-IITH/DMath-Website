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
        icons: [
          {
            "purpose":"any maskable",
            "src":"webAppIcons/logoi48.png",
            "sizes":"48x48",
            "type":"image/png"
          },
          {
            "purpose":"any maskable",
            "src":"webAppIcons/logoi72.png",
            "sizes":"72x72",
            "type":"image/png"
          },
          {
            "purpose":"any maskable",
            "src":"webAppIcons/logoi96.png",
            "sizes":"96x96",
            "type":"image/png"
          },
          {
            "purpose":"any maskable",
            "src":"webAppIcons/logoi144.png",
            "sizes":"144x144",
            "type":"image/png"
          },
          {
            "purpose":"any maskable",
            "src":"webAppIcons/logoi192.png",
            "sizes":"192x192",
            "type":"image/png"
          },
          {
            "purpose":"any maskable",
            "src":"webAppIcons/logoi256.png",
            "sizes":"256x256",
            "type":"image/png"
          },
          {
            "purpose":"any maskable",
            "src":"webAppIcons/logoi384.png",
            "sizes":"384x384",
            "type":"image/png"
          },
          {
            "purpose":"any maskable",
            "src":"webAppIcons/logoi512.png",
            "sizes":"512x512",
            "type":"image/png"
          }
        ],
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
