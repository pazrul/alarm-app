var controllers = require('../controllers/');

module.exports = [{
    path: '/',
    method: 'GET',
    handler: function (request, reply) {
        reply.view('default');
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
