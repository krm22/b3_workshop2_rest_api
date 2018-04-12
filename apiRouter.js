var express = require('express');
var usersCtrl = require('./routes/usersCtrl');
var messagesCtrl = require('./routes/messagesCtrl');
var coachCtrl = require('./routes/coachCtrl');

exports.router = (() => {

    var apiRouter = express.Router();
    
    //users
    
    apiRouter.route('/users/register').post(usersCtrl.register);
    apiRouter.route('/users/login').post(usersCtrl.login);
    apiRouter.route('/users/profile').get(usersCtrl.getUserProfile);
    apiRouter.route('/users/profile').put(usersCtrl.updateUserProfile);
    
    //messages
    apiRouter.route('/messages/new').post(messagesCtrl.createMessage);
   
    //coach
    apiRouter.route('/users/coaches').get(coachCtrl.getCoach);
    apiRouter.route('/users/coaches/:id').put(coachCtrl.updateCoach);
    apiRouter.route('/users/coaches/:id').delete(coachCtrl.deleteCoach);
  
    
    //projects

    //roles

    //coins
    
    //chat



    return apiRouter;

})();