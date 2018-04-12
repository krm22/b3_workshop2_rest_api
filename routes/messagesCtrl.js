//Imports 
var models = require('../models');
var asyncLib = require('async');
var jwtUtils = require('../utils/jwt.utils');

//Constants
const TITLE_LIMIT   = 2;
const CONTENT_LIMIT = 4;
const ITEMS_LIMIT   = 50;
//Routes
module.exports= { 
    createMessage: (req, res) => {
   // Getting auth header
        var headerAuth = req.headers['authorization'];
        var id_user = jwtUtils.getUserId(headerAuth);

   // getting params
        var title_message = req.body.title_message;
        var content_message = req.body.content_message;

    //  if (title_message == null || content_message == null) {
    //     return res.status(400).json({ 'error': 'missing parameters' });
    //   }
  
    //   if (title_message.length <= TITLE_LIMIT || content_message.length <= CONTENT_LIMIT) {
    //     return res.status(400).json({ 'error': 'invalid parameters' });
    //   }

      asyncLib.waterfall([
       (done) => {
          models.Message.findOne({
            attributes: ['id-user', 'title_message', 'content_message'],
            where: { id_user: id_user }
          })
          .then((userFound) => {
            done(null, userFound);
          })
          .catch((err) => {
            return res.status(500).json({ 'error': 'unable to verify user' });
          });
        },
        (userFound, done) => {
          if(userFound) {
            models.Message.create({
              id_message : id_message ,
              title_message: title_message, 
              content_message: content_message,
              id_user : userFound.id_user,
              id_chat : userFound.id_chat
            })
            .then((newMessage) => {
              done(newMessage);
            });
          } else {
            res.status(404).json({ 'error': 'user not found' });
          }
        },
      ], (newMessage) => {
        if (newMessage) {
          return res.status(201).json(newMessage);
        } else {
          return res.status(500).json({ 'error': 'cannot post message' });
        }
      });
    },
    listMessage: (req, res) => {

        var headerAuth = req.headers['authorization'];
        var id_user = jwtUtils.getUserId(headerAuth);

    }
}