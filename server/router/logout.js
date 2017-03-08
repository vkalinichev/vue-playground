const Router = require( 'koa-router' )
const logout = new Router()

module.exports = logout

.post( '/', async ctx => {
    ctx.logout()
    ctx.status = 200
} )
