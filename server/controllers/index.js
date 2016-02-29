var Promise = require('bluebird');

function randNumber(num) {
    return new Promise(function (resolve, reject) {
        resolve(Math.random() * num);
    });
}
module.exports = {
    randNumber: randNumber
}
