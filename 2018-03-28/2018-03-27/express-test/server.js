let express = require("express");
let app = express();
var bodyParser = require("body-parser");

app.listen(8080);

app.use(express.static("./www"));

// app.get("/user",(req,res)=>{
//     console.log(1111)
// })
// app.post("/user",(req,res)=>{
//     console.log(33333)
// })
app.use(bodyParser())
// app.use("/user",(req,res)=>{
//     console.log(1111133333);
//     let get = req.query;
//     let post = req.body;
//     console.log("get",get)
//     console.log("post",post)
// })

var users = {}
app.use ("/user",(req,res)=>{
    var GET = req.query;
    let POST = req.body;
    var GET = GET.act ? GET : POST;
    switch (GET.act) {
        case "reg":
            if(users[GET.user]){
              res.send({"ok":false,"msg":"此用户已存在"})
            }else{
              users[GET.user] = GET.pass;
              res.send({"ok":true,"msg":"注册成功"})
              // console.log(users);
            }
          break;
        case "login":
        console.log(users,GET)
            if(users[GET.user]==null){
              res.send({"ok":false,"msg":"用户名不存在"})
            }else if(users[GET.user] != GET.pass){
              res.send({"ok":false,"msg":"用户名或密码不正确"})
            }else{
              res.send({"ok":true,"msg":"登录成功"})
            }
          break;
        default:
          res.send({"ok":false,"msg":"未知的act"});
      }
})