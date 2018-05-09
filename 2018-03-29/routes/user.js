let express = require('express');

module.exports = function(db){
    let router = express.Router();
    router.get('/login',(req,res,next)=>{
        res.render('login.ejs',{})
    })
    router.get('/register',(req,res,next)=>{
        res.render('register.ejs',{})
    })
   
    return router
}