//Imports 
var bcrypt = require('bcrypt');
var jwtUtils = require('../utils/jwt.utils')
var models = require('../models');
var asyncLib = require('async')

//Constants
const req = require('request')
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;
//Routes
module.exports = {
    register: (req, res) => {

        var id_user = req.body.id_user
        var name_user = req.body.name_user
        var firstName_user = req.body.firstName_user
        var password_user = req.body.password_user
        var email_user = req.body.email_user

        if (email_user == null || password_user == null) {
            return res.status(400).json({
                'error': 'missing parameters'
            });
        }

        if (!EMAIL_REGEX.test(email_user)) {
            return res.status(400).json({
                'error': 'email is not valid'
            });
        }

        if (!PASSWORD_REGEX.test(password_user)) {
            return res.status(400).json({
                'error': 'password invalid (must have a length of 4 -8 character and include one number )'
            });
        }

        asyncLib.waterfall([
            (done) => {
                models.User.findOne({
                        attributes: ['email_user'],
                        where: {
                            email_user: email_user
                        }
                    })
                    .then((userFound) => {
                        done(null, userFound);
                    })
                    .catch((err) => {
                        return res.status(500).json({
                            'error': 'unable to verify user'
                        });
                    });
            },
            (userFound, done) => {
                if (!userFound) {
                    bcrypt.hash(password_user, 5, (err, bcryptedPassword) => {
                        done(null, userFound, bcryptedPassword)
                    });
                } else {
                    return res.status(409).json({
                        'error': 'user already exits'
                    })
                }
            },
            (userFound, bcryptedPassword, done) => {
                var newUser = models.User.create({
                        id_user: id_user,
                        name_user: name_user,
                        firstName_user: firstName_user,
                        password_user: bcryptedPassword,
                        email_user: email_user
                    })
                    .then((newUser) => {
                        done(newUser)
                    })
                    .catch((err) => {
                        return res.status(500).json({
                            'error': 'cannot add user'
                        })
                    })
            }
        ], (newUser) => {
            if (newUser) {
                return res.status(201).json({
                    'id_user': newUser.id_user
                });
            } else {
                return res.status(500).json({
                    'error': 'cannot add user'
                });
            }
        });
    },
    login: (req, res) => {

        //Params
        var password_user = req.body.password_user;
        var email_user = req.body.email_user;

        if (password_user == null || email_user == null) {
            return res.status(400).json({
                'error': 'missing parameters'
            });
        }

        if (email_user == null || password_user == null) {
            return res.status(400).json({
                'error': 'missing parameters'
            });
        }

        asyncLib.waterfall([
            (done) => {
                models.User.findOne({
                        where: {
                            email_user: email_user
                        }
                    })
                    .then((userFound) => {
                        done(null, userFound);
                    })
                    .catch((err) => {
                        return res.status(500).json({
                            'error': 'unable to verify user'
                        });
                    });
            },
            (userFound, done) => {
                if (userFound) {
                    bcrypt.compare(password_user, userFound.password_user, (errBcrypt, resBcrypt) => {
                        done(null, userFound, resBcrypt);
                    })
                } else {
                    return res.status(404).json({
                        'error': 'user not exist in DB'
                    });
                }
            },
            (userFound, resBycrypt, done) => {
                if (resBycrypt) {
                    done(userFound);
                } else {
                    return res.status(403).json({
                        'error': 'invalid password'
                    });
                }
            }
        ], (userFound) => {
            if (userFound) {
                return res.status(200).json({
                    'id_user': userFound.id_user,
                    'token': jwtUtils.generateTokenForUser(userFound)
                });
            } else {
                return res.status(500).json({
                    'error': 'cannot log on user'
                });
            }
        })
    },
    getUserProfile: (req, res) => {
        var headerAuth = req.headers['authorization'];
        var id_user = jwtUtils.getUserId(headerAuth);
        if(id_user < 0)
            return res.status(400).json({'error': 'wrong token'});

        models.User.findOne({
            attributes:['id_user', 'email_user', 'firstName_user', 'name_user' ],
            where:{ id_user: id_user }
        }).then((user)=>{
            if(user){
                res.status(201).json(user);
            }else{
                res.status(404).json({'error' : 'user not found'});
            }
        }).catch(()=>{
            res.status(500).json({'error': 'cannot fetch user'});
        })
    }
    



}