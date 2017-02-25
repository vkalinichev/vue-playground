const Koa = require( 'koa' )
const app = new Koa()
const { blue } = require( 'chalk' )
const { BackendServerPort } = require( '../config/config' )
const router = require( './router' )

app.use( router.routes() )
app.use( router.allowedMethods() )

app.listen( BackendServerPort )
console.log( blue( 'Listening on http://localhost:' + BackendServerPort ) )
