var bcrypt = require('bcrypt');
var jwtUtils = require('../utils/jwt.utils')
var models = require('../models');
var asyncLib = require('async');

module.exports = {

    getCoach: (req, res) => {

        models.Coach.findAll({
            attributes:['id_coach', 'label_coach', 'id_user', 'id_competence' ],

        }).then((user)=>{
            if(user){
                res.status(201).json(user);
            }else{
                res.status(404).json({'error' : 'user not found'});
            }
        }).catch(()=>{
            res.status(500).json({'error': 'cannot fetch user'});
        })
    },
    updateCoach: (req, res) => {
        
        var id_coach  = req.params.id
     
         // Params
         var label_coach = req.body.label_coach;
     
         asyncLib.waterfall([
          (done)=> {
             models.Coach.findOne({
               attributes: ['id_coach', 'label_coach' ],
               where: { id_coach : id_coach }
             }).then( (userFound) => {
               done(null, userFound);
             })
             .catch((err) =>{
               return res.status(500).json({ 'error': 'unable to verify user' });
             });
           },
           (userFound, done) => {
             if(userFound) {
               userFound.update({
                 label_coach: (label_coach ? label_coach : userFound.label_coach)
               }).then(() => {
                 done(userFound);
               }).catch((err) => {
                 res.status(500).json({ 'error': 'cannot update user' });
               });
             } else {
               res.status(404).json({ 'error': 'user not found' });
             }
           },
         ], (userFound) => {
           if (userFound) {
             return res.status(201).json(userFound);
           } else {
             return res.status(500).json({ 'error': 'cannot update user profile' });
           }
         });
       },
       deleteCoach: (req, res)=>{
        // Getting auth header
         var headerAuth  = req.headers['authorization'];
         var id_user  = jwtUtils.getUserId(headerAuth);

    
        models.User.findOne({
            include: [
                {model: models.Role, as: 'Roles'}
            ],
            where: { id_user : id_user }
        }).then( (userFound) => {
            let roles = [];
            userFound.Roles.forEach(role => {
                console.log(role);
                roles.push(role.label_role);
            });
            console.log(roles);
            if (roles.indexOf('Pédagogie') === -1) {
                return res.status(403).json({ 'error': 'not authorized' });
            }

        }).catch((err) =>{
            console.log(err);
            return res.status(500).json({ 'error': 'unable to verify user' });
        });
        

       }


    }

 


