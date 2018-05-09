let express = require('express');

module.exports = function(db){
    let router = express.Router();
    router.get('/pinpaituan',(req,res)=>{
        let sql = 'SELECT * FROM close';
        db.query(sql,(err,data)=>{
            if(err){
                console.log('close database error')
            }else{
                // console.log(data);
                res.render('pinpaituan.ejs',{close:data,use:null});
            }
        })
       
    })
   
    return router
}