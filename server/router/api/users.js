const Router = require( 'koa-router' )
const users = new Router()
const db = require( '../../adapter' )

module.exports = users

.get('/', async ctx =>
    ctx.body = await db( 'users' )
)

.get('/:name', async ctx => {
    const data = await db( 'users' )
    const result = data.find( user => user.name === ctx.params.name )

    if ( result ) {
        ctx.body = result
    } else {
        ctx.status = 404
    }
} )
