const bodyParser = require( 'koa-bodyparser' )
const convert = require( 'koa-convert' )
const Koa = require( 'koa' )
const logger = require( 'koa-logger' )
const passport = require( 'koa-passport' )
const session = require( 'koa-generic-session' )

const auth = require( './middlewares/auth' )
const { authRouter, router } = require( './router' )
const { BackendServerPort } = require( '../config/config' )

const app = new Koa()


app.keys = [ 'secret' ]

app
.use( logger() )
.use( bodyParser() )
.use( convert( session() ) )
.use( passport.initialize() )
.use( passport.session() )

.use( authRouter.routes() )
.use( authRouter.allowedMethods() )
.use( auth() )

.use( router.routes() )
.use( router.allowedMethods() )

.listen( BackendServerPort )
