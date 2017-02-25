module.exports = function ( env ) {

    if ( env['prod'] ) {
        process.env.NODE_ENV = 'production'
    } else if ( env['dev'] ) {
        process.env.NODE_ENV = 'development'
    } else if ( env ) {
        process.env.NODE_ENV = env
    }

    return require( './config/webpack.config' )
}
