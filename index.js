const Hapi = require('hapi');
const Twilio = require('twilio');
const Routes = require('./server/routes/');

var portNumber = process.env.PORT ? process.env.PORT : 8080;
var server = new Hapi.Server();

server.connection({port: portNumber});    

server.register([require('vision'), require('inert'), {register: require('lout')}], function (err) {
    if (err) {
        console.log(err);
    }
    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'server/templates'
    });
});

for (route in Routes) {
    server.route(Routes[route]);
}
server.start(function () {
    console.log('Server started at port: ' + server.info.uri);
});
