var controllers = require('../controllers/');
console.log(controllers);
module.exports = [{
    path: '/',
    method: 'GET',
    handler: function (request, reply) {
        reply('home!');
    }
},
{
    path: '/{num}',
    method: 'GET',
    handler: function (request, reply) {
        var num = encodeURIComponent(request.params.num);
        controllers.randNumber(num).then(function(result){
           reply(result);
        });
    }
}
]
