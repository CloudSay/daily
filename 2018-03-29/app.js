let express = require('express')
let app = express ();
let bodyParser = require('body-parser');
let cookieSession = require('cookie-session');
let multer = require('multer');
let consolidate = require('consolidate');
let mysql = require('mysql')


//配置中间件
app.use(bodyParser());
let sessionArr =[];
for (var i=0;i<1000000;i++){
    sessionArr.push('alex_'+Math.random().toFixed(5));
}
app.use (cookieSession({
    name:"ss_id",
    keys:sessionArr,
    maxAge:1000*20
}))

let multerObj = multer({dest:'./public/upload'})
app.use(multerObj.any());
app.set('views.engine','html');
app.set('views','./views');
app.engine('html',consolidate.ejs);

let db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root123',
    database:'2018-03-28',
    port:3306
})

//做响应

//监听页面托管


app.get('/',require('./routes/home')(db))   

app.get('/pinpaituan',require('./routes/pinp')(db))
app.get('/register',require('./routes/user')(db))
app.get('/Login',require('./routes/user')(db))
// app.get('/Login-test',require('./routes/login')(db))
app.use('/Login-test',(req,res,next)=>{
    let sql ="SELECT * FROM goods"
    db.query(sql,(err,data)=>{
        if(err){
            console.log('goods database error')
        }else{
            res.goods = data;
            next()
        }
    })
   
})
app.use('/Login-test',(req,res)=>{
    let sql = `SELECT * FROM user WHERE usename="${req.body.username}" AND password="${req.body.password}"`;
    // console.log(sql)
    db.query(sql,(err,data)=>{
        if(err){
            console.log('use database error')
        }else{
            console.log(data.length)
            if(data.length>0){
                res.render('index.ejs',{use:data,goods:res.goods});
            }else{
                res.render('register.ejs',{})
            }
 
        }
    })
})
app.use('/register-test',(req,res,next)=>{
    let sql ="SELECT * FROM goods"
    db.query(sql,(err,data)=>{
        if(err){
            console.log('goods database error')
        }else{
            res.goods = data;
            next()
        }
    })
   
})
app.use('/register-test',(req,res)=>{
    let sql = `SELECT * FROM user WHERE usename="${req.body.username}" AND password="${req.body.password}"`;
    // console.log(sql)
    db.query(sql,(err,data)=>{
        if(err){
            console.log('use database error')
        }else{
            console.log(data.length)
            if(data.length>0){
                res.send("用户名已经存在")
            }else{
                let sql = `INSERT INTO user(usename,password) VALUES("${req.body.username}","${req.body.password}")`;
                db.query(sql,(err,data)=>{
                    if(err){
                        console.log('use database error')
                    }else{
                     res.render('index.ejs',{use:data,goods:res.goods});
                    }
                })
            }
 
        }
    })
})
app.get('/Sale',(req,res)=>{
    res.render('Sale.ejs',{use:null});
})

app.get('/9kuai9',(req,res)=>{
     res.render('9kuai9.ejs',{use:null});
})
app.get('/register',(req,res)=>{
    res.render('register.ejs',{use:null});
})
app.get('/jiesuan',(req,res)=>{
    res.render('jiesuan.ejs',{use:null});
})
app.get('/goods',(req,res)=>{
    res.render('goods.ejs',{use:null});
})

app.use(express.static('./public'));
app.listen(8080);
// app.use('/test',(req,res)=>{
//     console.log('get',req.query)
//     console.log('post',req.body)
//     console.log('files',req.files)
//     res.render('index.ejs',{});
//     db.query('SELECT * FROM goods',(err,data)=>{
//         console.log(data)
//     });
// });
