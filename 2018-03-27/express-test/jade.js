let jade = require('jade');
let fs = require("fs");
// console.log(jade.render('html'));
let str = jade.renderFile('./view/1.jade',{pretty:true});
fs.writeFile('./www/1.html',str)
console.log(str)
