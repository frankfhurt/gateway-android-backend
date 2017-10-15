var mongoose = require('mongoose');
var db;

const nconf = require('nconf');
nconf.argv().env().file('keys.json');

const connectionString = nconf.get('mongoDBConnectionString');

module.exports = () => {
    if (!db) {
        db = mongoose.connect(connectionString)
    }
    return db;
}