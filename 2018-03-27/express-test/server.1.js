let express = require ("express");

let server= express();

server.listen(8080,"127.0.0.1",()=>{
    console.log("server is run ...")
})
server.use(express.static("./www"));
server.use("/user",(req,res)=>{
    // console.log("/user")
    res.send({a:"数据"});
})
server.use("/ajax",(req,res)=>{
    console.log("/ajax")
})