var express = require('express');
var app = express();

var PrivilegeController = require('./privilege/PrivilegeController');
app.use('/privileges', PrivilegeController);

var UserController = require('./user/UserController');
app.use('/users', UserController);

var UserprivilegeController = require('./userprivilege/UserprivilegeController');
app.use('/usersprivileges', UserprivilegeController);


module.exports = app;