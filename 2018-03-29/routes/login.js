let express = require('express');

module.exports=(db)=>{
  let router = express.Router();

  //banner接口
  router.get('/Login-test',(req,res,next)=>{
    let sql=`SELECT * FROM goods`;
    db.query(sql,(err,data)=>{
      if(err){
        console.log('goods database error');
        //res.send({error:1,msg:'库错误'})
      }else{
        // console.log(data);
        // res.render('index.ejs',{banners:data});
        res.goods=data;
        next();
      }
    });
    
  })

  //news列表 接口
  router.get('/Login-test',(req,res,next)=>{
    let sql=`SELECT * FROM use`;
    db.query(sql,(err,data)=>{
      if(err){
        console.log('use database error');
        //res.send({error:1,msg:'库错误'})
      }else{
        // console.log(data);
        // res.send(data);
        res.render('index.ejs',{
          use:data,
          goods:res.goods,
        //   home:'active',
        //   follow:'',
        //   column:''
        });
      }
    });
  })

  return router;
}