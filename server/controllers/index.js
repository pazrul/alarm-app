var Promise = require('bluebird');
var config = require('../../config.js');
var sid = config.TWILIO_SID;
var token = config.TWILIO_TOKEN;
var sendingNumber = config.MAIN_PHONE_NUMBER;

const client = require('twilio')(sid, token);

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
