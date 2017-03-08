const Router = require( 'koa-router' )
const login = require( './login' )
const logout = require( './logout' )
const users = require( './api/users' )

const authRouter = new Router
const router = new Router

authRouter
.use( '/login', login.routes(), login.allowedMethods() )
.use( '/logout', logout.routes(), logout.allowedMethods() )

router
.use( '/api/users', users.routes(), users.allowedMethods() )
.get( '/api/', async( ctx, next ) => {
    ctx.body = { server: 'koa 2' }
    await next()
} )

module.exports = {
    authRouter,
    router
}
