let express = require("express");
let app = express();
app.listen(8080,"localhost",()=>{
    console.log("cookie-server is run ...")
});
let cookieSession = require('cookie-session');
app.use (cookieSession({
    name:"node_id",
    keys:['aa','bb'],
    maxAge:1000*10
}));
app.use("/write",(req,res)=>{
    console.log('write');
    // console.log(req.session);
    req.session.name = "hyf";
    req.session.pass = "123456";
    res.end();
});
app.use("/read",(req,res)=>{
    console.log('read')
    console.log(req.session);
    res.end();
});
app.use("/del",(req,res)=>{
    console.log('del')
    req.session.name = undefined;
    req.session.pass = undefined;
    res.end();
});
