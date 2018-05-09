let mongodb = require('mongodb');

let mongoCt = mongodb.MongoClient;
mongoCt.connect('mongodb://127.0.0.1:27017',(err,client)=>{
    if(!err){
        let db = client.db('goods');
        let product = db.collection('goods');
        
    }
})
mongoCt
