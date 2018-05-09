var http = require("http")
var fs = require("fs")
var querystring = require("querystring")
var urlLib = require("url")

http.createServer(function(req,res){
  if (req.url != "favicon.ico"){

  }
   
  var obj = urlLib.parse(req.url);
  var reg = obj.pathname;
  let GET = querystring.parse(obj.query);
  var str = ""
  req.on("data",function(data){
      str += data
  })
  res.on("end",function(){
      let POST = querystring.parse(str)
      console.log(str)
  })
  console.log(GET)
fs.readFile("./www"+reg,function(err,data){
    if(err){
        res.write("请求错误："+err)
    }else{
        // res.writeHead(200,{"Content-Type":"json/html;charsat=utf-8"})
        res.write(data)
    }
    res.end();
})
}).listen(8080)