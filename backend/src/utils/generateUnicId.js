const crypto = require('crypto');

module.exports = function generateUnicId() {

    crypto.randomBytes(4).toString('HEX');
}