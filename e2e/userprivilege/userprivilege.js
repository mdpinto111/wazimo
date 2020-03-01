var db = require('../db');

var Userprivilege = {
    getusersprivileges: function(callback)
    {
        return db.query('SELECT name,privilege,description FROM `users` INNER JOIN `privileges` ON `users`.id = `privileges`.id', callback);
    }
}

module.exports = Userprivilege;

//SELECT name,privilege,description FROM `users` INNER JOIN `privileges` ON `users`.id = `privileges`.id