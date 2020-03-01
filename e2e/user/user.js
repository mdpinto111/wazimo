var db = require('../db');

var Privilege = {
    getusers: function(callback)
    {
        return db.query('SELECT * from users', callback);
    }
}

module.exports = Privilege;

