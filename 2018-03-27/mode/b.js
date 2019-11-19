var a = 12;
var b =  "hyf";
var obj = {
            fn:()=>{
                var c= a+b;
                console.log(c);
                return 4;
            }
        }
// exports.aa=a;
// exports.bb=b;
// exports.obj=obj;
module.exports = {
    aa:a,
    bb:b,
    obj:obj
}