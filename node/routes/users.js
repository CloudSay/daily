var express = require('express');
var router = express.Router();
let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;

/* GET users listing. */
router.post('/', function(req, res, next) {
//	res.setHeader('Access-Control-Allow-Origin',req.headers.origin);
mongoCt.connect('mongodb://127.0.0.1:27017', (err, client) => {
    if (!err) {
        let db = client.db('react'); //返回库对象
        let index = db.collection('user'); //返回集合(表)
        // index.find({}).toArray((err, doc) => {
        //     console.log(typeof doc);
        //     res.send(doc)
        // });
        index.insertOne({"username":req.body.username,"password":req.body.password},(err,data)=>{
            // console.log(data);
            res.send({error:0,Msg:"成功"})
        })
    }
});

//  mongoCt.connect('mongodb://127.0.0.1:27017', (err, client) => {
//      if (!err) {
//          let db = client.db('react'); //返回库对象
//          let index = db.collection('user'); //返回集合(表)
//
//          index.insertOne({"username":req.body.username,"password":req.body.password},(err,data)=>{
//  		console.log(data);
//  		res.send({error:0,Msg:"成功"})
//          });
//      }
//  });	 
});

module.exports = router;
