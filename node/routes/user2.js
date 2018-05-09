var express = require('express');
var router = express.Router();
let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient;

router.post('/', function(req, res, next) {
    //console.log('list');
    //根据req -> 兜库mongodb -> send
//  res.setHeader('Access-Control-Allow-Origin',req.headers.origin);
    //1.创建客户端
    mongoCt.connect('mongodb://127.0.0.1:27017', (err, client) => {
        if (!err) {
            let db = client.db('react'); //返回库对象
            let index = db.collection('user'); //返回集合(表)
			if(req.body.type == 'reg'){
				index.insertOne(
					{
					"username":req.body.username,"password":req.body.password},
					(err,data)=>{res.send({error:0,Msg:"成功"})
			         }
				)
			}
			if(req.body.type == 'login'){
				index.find({"username":req.body.username,"password":req.body.password}).toArray((err, doc) => {
			            if(!doc.length == 0){
			            	res.send({error:0,Msg:"成功"})
			            }else{
			            	res.send({error:1,Msg:"错误"})
			            }
			            });
			}
            
        }
    });

});
module.exports = router