const Router = require( 'koa-router' )
const router = new Router()
const users = require( './routes/users' )

module.exports = router

router.use( '/api/users', users.routes(), users.allowedMethods() )

router.get( '/', async ( ctx, next ) => {
    ctx.body = 'koa 2'
    await next()
} )

