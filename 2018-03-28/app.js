let express = require('express')
let app = express();
var bodyParser = require('body-parser');//就是一个函数，中间件
let multer = require('multer');//引入中间件 
let pathLib = require('path');
let fs = require('fs');
let consolidate = require('consolidate')


app.listen(8002);

app.use(express.static('./www'));

//配置中间件

//post数据
app.use(bodyParser());

//文件上传
let multerObj = multer({ dest: './upload' });
app.use(multerObj.any());


//模板引擎管理

app.set('view.engine','html');//模板引擎输出类型
app.set('views','./views'); //引擎模块目录指定
app.engine('html',consolidate.ejs);  //指定引擎类型
// app.engine('css',consolidate.jade);





//响应
app.use('/from', (req, res, next) => {
  console.log('xxoo');
  let get = req.query;
  let post = req.body;
  console.log('get', get);
  console.log('post', post);
  res.end();
});

app.use('/upload', (req, res) => {
  console.log(req.files);
  let saveFile = req.files[0].path;//upload\\4243b38a2603e41857152a0c651f436b
  let reFile = saveFile + pathLib.parse(req.files[0].originalname).ext;

  fs.rename(saveFile, reFile);

  //转换reFile -> url 路径 -> 存库 -> 库路径 ->返回前端
  //http://localhost:8002/upload/req.file[0].filename+pathLib.parse(req.files[0].originalname).ext;
  res.end();
})


let sql = {};//{alex:alex123,ppp:ppp123} 假库
app.use('/ajx', (req, res) => {
  let post = req.body;
  let get = req.query;

  let data = get.act ? get : post;

  switch (data.act) {
    case 'login':
      if (sql[data.username]) {
        //校验密码
        if (data.password == sql[data.username]) {
          res.send({ error: 0, msg: "登录成功", data: { fans: 1212 } });
        } else {
          res.send({ error: 1, msg: "用户名或者密码有误" });
        }
      } else {
        res.send({ error: 1, msg: "用户名不存在" });
      }
      break;
    case 'reg':
      if (sql[data.username]) {
        res.send({ error: 1, msg: "用户名已存在" });
      } else {
        sql[data.username] = data.password //更新假库
        res.send({ error: 0, msg: "注册成功" });
      }
      break;
    default:
      res.send({ error: 1, msg: "错误的ACT" });
  }
});

//ejs 渲染
app.use('/buycar', (req, res) => {
  // res.send();//res.write()//res.render()
  // res.render('模板文件',{数据});
  res.render('1.ejs',{name:'bulala'})
});