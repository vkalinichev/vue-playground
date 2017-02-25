const uniqPort = require( 'uniq-port' )
const appName = require( '../package.json' ).name

module.exports = {

    /** Koa */
    BackendServerPort: uniqPort( `${ appName }:server` ),
    BackendServerDelay: 300,

    /** Webpack Dev Server */
    FrontendServerPort: uniqPort( appName ),

}
