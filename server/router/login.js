const passport = require( 'koa-passport' )
const Router = require( 'koa-router' )
const login = new Router()

module.exports = login

.post( '/', async ( ctx, next ) => {
    passport.authenticate( 'local', async ( err, user ) => {
        if ( user ) {
            ctx.login( user )
        } else {
            ctx.throw( 401 )
        }
    } )( ctx, next )
} )
