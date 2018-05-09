let express = require('express');

module.exports = function(db){
    let router = express.Router();
    router.get('/',()=>{
        console.log('路由a')
        console.log(db)
    })
    router.get('/aa',()=>{
        console.log('路由aa')
        console.log(db)
    })
    return router
}