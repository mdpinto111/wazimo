var db = require('../db');

var Privilege = {
    getprivileges: function(callback)
    {
        return db.query('SELECT * from privileges', callback);
    }
}

module.exports = Privilege;

//SELECT name,privilege,description FROM `users` INNER JOIN `privileges` ON `users`.id = `privileges`.id