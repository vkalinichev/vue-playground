const passport = require( 'koa-passport' )
const { Strategy } = require( 'passport-local' )

const user = { id: 1, username: 'test', password: 'test' }

passport.serializeUser( ( user, done ) => done( null, user.id ) )
passport.deserializeUser( async ( id, done ) => done( null, user ) )

passport.use( new Strategy( ( username, password, done ) => done( null,
    (username === 'test' && password === 'test') ? user : false
)))

module.exports = () =>

    async ( ctx, next ) => {
        if ( ctx.isAuthenticated() ) {
            await next()
        } else {
            ctx.throw( 401 )
        }
    }
