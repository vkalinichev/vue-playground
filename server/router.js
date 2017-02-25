const Router = require( 'koa-router' )
const router = new Router()
const { BackendServerDelay } = require( '../config/config' )

module.exports = router

const delay = ( ms ) => new Promise( resolve => setTimeout( resolve, ms || BackendServerDelay ) )

router.get( '/', async ( ctx, next ) => {
    await delay()
    ctx.body = 'koa 2'
    await next()
} )

router.get( '/api', async ( ctx, next ) => {
    await delay()
    ctx.body = 'koa api'
    await next()
} )

