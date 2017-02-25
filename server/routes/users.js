const Router = require( 'koa-router' )
const users = new Router()
const db = require( '../adapter' )

users.get('/', async (ctx, next) => {
    ctx.body = await db( 'users' )
    await next()
} )

users.get('/:name', async (ctx, next) => {
    const data = await db( 'users' )
    const result = data.find( user => user.name === ctx.params.name )

    if ( result ) {
        ctx.body = result
    } else {
        ctx.status = 404
    }
    await next()
} )

module.exports = users
