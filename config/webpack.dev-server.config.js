const config = require( './config' )

module.exports = {

    port: config.FrontendServerPort,

    proxy: {
        "/api": {
            target: `http://localhost:${ config.BackendServerPort }`,
            secure: false
        }
    },

    stats: {
        colors: true,
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        version: false,
        time: false
    }

}
