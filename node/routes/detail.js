var express = require('express');
var router = express.Router();
let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;

router.get('/', function(req, res, next) {
    //console.log('list');
    //根据req -> 兜库mongodb -> send
//  res.setHeader('Access-Control-Allow-Origin',req.headers.origin);
    //1.创建客户端
    mongoCt.connect('mongodb://127.0.0.1:27017', (err, client) => {
        if (!err) {
            let db = client.db('react'); //返回库对象
            let index = db.collection('detail'); //返回集合(表)

            index.find({}).toArray((err, doc) => {
                console.log(typeof doc);
                res.send(doc)
            });
        }
    });

});
module.exports = router