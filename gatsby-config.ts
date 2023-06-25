import type {GatsbyConfig} from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Portfolio',
    siteUrl: 'https://www.yourdomain.tld',
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-sharp`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
  ],
};

export default config;
