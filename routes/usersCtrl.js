//Imports 
var bcrypt = require('bcrypt');
var jwtUtils = require('../utils/jwt.utils')
var models = require('../models');

//Constants
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d).{4,8}$/;
//Routes
module.exports = {
    register: (req, res) =>{
       //params front to back mapping

       var id_user = req.body.id_user
       var name_user = req.body.name_user 
       var firstName_user  = req.body.firstName_user 
       var password_user = req.body.password_user
       var email_user = req.body.email_user

       if ( email_user == null || password_user == null ){
           return res.status(400).json({
                'error': 'missing parameters'
           });
       }

       if (!EMAIL_REGEX.test(email_user)){
        return res.status(400).json({
            'error': 'email is not valid'
          });
       }

       if (!PASSWORD_REGEX.test(password_user)){
        return res.status(400).json({
            'error': 'password invalid (must have a length of 4 -8 character and include one number )'
          });
       }

       
      // Todo:  verify psuedo length, mail regex, password etc 
        models.User.findOne({
            attributes: ['email_user'],
            where: { email_user: email_user }
        })
        .then((userFound) => {
            if(!userFound) {
                bcrypt.hash(password_user, 5, (err, bcryptedPassword)=>{
                    var newUser = models.User.create({
                        //backend to front-end object mapping
                        id_user : id_user,
                        name_user: name_user,
                        firstName_user: firstName_user,
                        password_user: bcryptedPassword,
                        email_user: email_user
                    })
                    .then((newUser)=>{ 
                        console.log(this.newUser)
                        return res.status(201).json({
                            'id_user': newUser.id_user
                        })
                    })
                    .catch(()=>{
                        return res.status(500).json({ 'error': 'cannot add user'})
                    });
                });
          } else {
              return res.status(400).json({'error': 'user already exits'})
          }
        })
        .catch((err)=> {
            return res.status(500).json({
                'error': 'unable to verify user'
            });
        })
    },
    login: (req, res)=>{

        //Params
       var  password_user = req.body.password_user;
       var  email_user = req.body.email_user;

       if (password_user == null || email_user == null ){
        return res.status(400).json({
             'error': 'missing parameters'
        });
       }

     // Todo:  verify psuedo length, mail regex, password etc 
     models.User.findOne({
        where: {email_user: email_user}
     })
     .then((userFound)=>{
        if(userFound) {

            bcrypt.compare(password_user, userFound.password_user, (errBcrypt, resBcrypt)=>{
                if(resBcrypt){
                    return res.status(200).json({
                         'id_user': userFound.id_user,
                         'token': jwtUtils.generateTokenForUser(userFound)
                    })
                }else {
                    return res.status(403).json({'error': 'invlaid password'})
                }
            });
      } else {
          return res.status(400).json({'error': 'user does not exist in database'})
      }
    })
    .catch((err)=>{
        return res.status(500).json({
            'error': 'unable to verify user'
        });
    })
 },
  
}