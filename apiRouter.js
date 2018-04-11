var express = require('express');
var usersCtrl = require('./routes/usersCtrl');

exports.router = (function(){

    var apiRouter = express.Router();

    apiRouter.route('/users/register').post(usersCtrl.register);
    apiRouter.route('/users/login').post(usersCtrl.login);
    apiRouter.route('/users/profile').get(usersCtrl.getUserProfile);
    

    
    return apiRouter;
})();