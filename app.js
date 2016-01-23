var app = require('koa')(),
serve = require('koa-static');
var route= require('koa-route');
app.use(require('koa-connect-history-api-fallback')({
  verbose: true
}))
app.use(serve(__dirname + '/dist'))


app.listen(process.env.PORT || 3000, function(){console.log("serving on localhost:3000")});
