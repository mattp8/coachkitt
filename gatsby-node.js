const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                components: path.resolve(__dirname, 'src/components'),
                layouts: path.resolve(__dirname, 'src/layouts'),
                lib: path.resolve(__dirname, 'src/lib'),
                pages: path.resolve(__dirname, 'src/pages'),
                modules: path.resolve(__dirname, 'src/modules'),
                theme: path.resolve(__dirname, 'src/theme'),
                assets: path.resolve(__dirname, 'src/assets'),
                types: path.resolve(__dirname, 'src/types'),
                data: path.resolve(__dirname, 'src/data'),
                chakra: path.resolve('node_modules/@chakra-ui/core')
            }
        }
    })
}
