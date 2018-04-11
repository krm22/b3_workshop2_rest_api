// Imports
var models = require('../models');
var asyncLib = require('async');
var jwtUtils = require('../utils/jwt.utils')

// Constants

// Routes
module.exports = {
    createMessage : function(req, es) {
        // Getting auth headers
        var headerAuth = req.headers['authorization'];
        var userId = jwtUtils.getUserId(headerAuth);

        //Params
        var title = req.body.title;
        var content = req.body.content;

        if ( title == null || content == null ){
            return res.status(400).json({'error': 'missing parameters'});
        }
    },

    listMessages : function(req, es) {

    }
};