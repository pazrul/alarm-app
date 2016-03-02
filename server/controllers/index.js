var Promise = require('bluebird');
var sid = require('../../config.js').TWILIO_SID;
var token = require('../../config.js').TWILIO_TOKEN;
var client = require('twilio')(sid, token);
var sendingNumber = require('../../config.js').MAIN_PHONE_NUMBER;


function randNumber(num) {
    return new Promise(function (resolve, reject) {
        resolve(Math.random() * num);
    });
}

function sendSMS(number, content) {
    return new Promise(function (resolve, reject) {
        client.messages.create({
            body: content,
            to: number,
            from: sendingNumber
        }, function(err, message) {
            if (err) {
                reject(err);
            }
            process.stdout.write(message.sid);
            resolve(message);
        });
    });
}


module.exports = {
    randNumber: randNumber,
    sendSMS: sendSMS
}
