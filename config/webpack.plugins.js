const { webpack } = require( '@webpack-blocks/webpack2' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const OpenBrowserPlugin = require( 'open-browser-webpack-plugin' )
const DuplicatePlugin =require( 'duplicate-package-checker-webpack-plugin' )
const config = require( './config' )

exports.basePlugins = [
    new webpack.ProvidePlugin( {} ),
    new HtmlWebpackPlugin( {
        inject: true,
        template: './src/index.html'
    } ),
    new DuplicatePlugin()
]

exports.developmentPlugins = [
    new OpenBrowserPlugin( { url: `http://localhost:${ config.FrontendServerPort }` } )
]

exports.productionPlugins = [
    new webpack.LoaderOptionsPlugin( {
        debug: false
    } ),
    new webpack.optimize.UglifyJsPlugin( {
        output: {
            comments: false
        },
        screwIe8: true
    } )
]
