let express = require('express');

module.exports = function(db){
    let router = express.Router();
    router.get('/',(req,res)=>{
        let sql = 'SELECT * FROM goods';
        db.query(sql,(err,data)=>{
            if(err){
                console.log('goods database error')
            }else{
                // console.log(data);
                res.render('index.ejs',{goods:data,use:null});
            }
        })
    })
    return router
}