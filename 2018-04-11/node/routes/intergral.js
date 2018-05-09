var express = require('express');
var router = express.Router();
let mongodb = require('mongodb');

//1.创建客户端
router.get('/', function(req, res){
	// res.setHeader('Access-Control-Allow-Origin',req.headers.origin);//当前服务允许跨域
	//兜库-->mysql|mongodb  代理
	let mongoCt = mongodb.MongoClient;
	mongoCt.connect('mongodb://127.0.0.1:27017',(err,client)=>{
	  //client 客户端链接对象
	  if(!err){
	    let db = client.db('goods');//返回库对象
	    let goods = db.collection('integral');//返回集合(表)
	    goods.find().toArray((err,doc)=>{
	    	res.send(doc);
	    })
	   }else{
	   	console.log('404')
	   }
	})
  

});

module.exports = router;
