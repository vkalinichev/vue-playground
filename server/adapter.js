const { BackendServerDelay } = require( '../config/config' )
const users = require( './fixtures/users' )

const delay = ( ms ) => new Promise( resolve => setTimeout( resolve, ms || BackendServerDelay ) )

const fixtures = {
    users
}

module.exports = async ( resource ) => {
    if ( fixtures[ resource ] !== undefined ) {
        await delay( 250 )
        return fixtures[ resource ]
    }
    return 'error'
}
