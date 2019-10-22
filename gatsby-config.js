require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: 'Coach Kitt',
        language: 'en'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-emotion',
        'gatsby-plugin-typescript'
        // {
        //     resolve: `gatsby-plugin-favicon`,
        //     options: {
        //         logo: './src/assets/images/favico.png'
        //     }
        // },
        // {
        //     resolve: 'gatsby-source-datocms',
        //     options: {
        //         apiToken: process.env.DATO_TOKEN,
        //         preview: false,
        //         disableLiveReload: false
        //     }
        // }
    ]
}
