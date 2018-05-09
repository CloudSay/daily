let ejs = require('ejs');
let fs = require("fs");

// let data ={
//     title:"饿了吗",
//     arr:['apple','orange','asdf',"afdsafas"],
//     json:{a:1,b:2},
//     bl:true,
//     num:110,
//     strong:'<strong>强壮</strong>'
// }

ejs.renderFile('./view/index.ejs',(err,data)=>{
    console.log(err);
    // console.log(data);
    fs.writeFile('./www/index.html',data)
})