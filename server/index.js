const Koa = require( 'koa' )
const app = new Koa()
const { magenta, green } = require( 'chalk' )
const { BackendServerPort } = require( '../config/config' )
const router = require( './router' )

app.use( router.routes() )
app.use( router.allowedMethods() )

app.listen( BackendServerPort )
console.log( green( 'Listening on port' ), magenta( BackendServerPort ) )
