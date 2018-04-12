var express = require('express');
var usersCtrl = require('./routes/usersCtrl');
var messagesCtrl = require('./routes/messagesCtrl');

exports.router = (() => {

    var apiRouter = express.Router();

    apiRouter.route('/users/register').post(usersCtrl.register);
    apiRouter.route('/users/login').post(usersCtrl.login);
    apiRouter.route('/users/profile').get(usersCtrl.getUserProfile);
    apiRouter.route('/users/profile').put(usersCtrl.updateUserProfile);

    apiRouter.route('/messages/new').post(messagesCtrl.createMessage);

    return apiRouter;

})();