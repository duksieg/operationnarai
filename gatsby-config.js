if (typeof window !== `undefined`){
  require("dotenv").config({
  path: `.env.development`,
})}

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "operationNarai",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-leaflet",
    
  ],
  
};
