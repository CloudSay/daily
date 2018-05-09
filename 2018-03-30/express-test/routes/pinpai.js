var express = require('express');
var router = express.Router();
let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;
/* GET home page. */
router.get('/', function(req, res, next) {
//   console.log("list");

  mongoCt.connect('mongodb://127.0.0.1:27017',(err,client)=>{
    if(!err){
        let db = client.db('goods');
        let goods = db.collection('close');
       goods.find({},{}).toArray((err,doc)=>{
            // console.log(doc);
            res.send(doc)
        })
    }
})
});

module.exports = router;