// 阿里云  >  教程中心   >  js教程  >  ES6学习——迭代器（Iterators）：迭代器接口高级应用Script  
// ES6学习——迭代器（Iterators）：迭代器接口高级应用Script
// 发布时间：2018-04-13 来源：网络 上传者：用户

// 关键字: es6
// 文章地址：https://yq.aliyun.com/articles/686756?spm=a2c4e.11153940.topwz.1.2b9f291aZH5mLq
// https://jlongster.com/A-Study-on-Solving-Callbacks-with-JavaScript-Generators
// https://blog.csdn.net/yintianqin/article/details/62886626
// 发表文章
// 摘要：先看个概念叫iterator is iterable,就是迭代器本身可迭代。JS原生对象的迭代器基本都是这样的,看个例子:vararr=[1,2,3],iter=arr[Symbol.iterator]();for(letiofiter){console.log(i);}如果我们自己写的迭代器,怎么实现呢?其实很简单,让Symbol.iterator方法返回this,然后把next方法拿出来:functioniterateOver(...args){letindex=0;leti
// 先看个概念叫iterator is iterable,就是迭代器本身可迭代。JS原生对象的迭代器基本都是这样的,看个例子:

var arr=[1,2,3],iter = arr[Symbol.iterator]();
for(let i of iter){	
    console.log(i);
} 

// 如果我们自己写的迭代器,怎么实现呢?其实很简单,让Symbol.iterator方法返回this,然后把next方法拿出来:
function iterateOver(...args) {	
    let index = 0;	
    let iterable = {	
        [Symbol.iterator]() {	
            return this;//返回this	
        },	
        next() {//把next放到外面的对象上	
            if (index < args.length) {	
                return { value: args[index++],done:false };	
            } else {	
                return { done: true };	
            }	
        }	
    };	
    return iterable;
}
var it = iterateOver(1,2,3)[Symbol.iterator]();
for(let i of it){	
    console.log(i);
}
for(let i of iterateOver(1,2,3)){ 
    console.log(i);
}


// 然后我们在看个问题,就是next返回值,规范中明确说明了如果返回值不是Object,会抛出TypeError,在7.4.2中:
// The abstract operation IteratorNext with argument iterator and optional argument value performs the following steps:
// 1. If value was not passed, then
//     a. Let result be Invoke(iterator, "next", « »).
// 2. Else,
//     a. Let result be Invoke(iterator, "next", «value»).
// 3. ReturnIfAbrupt(result).
// 4. If Type(result) is not Object, throw a TypeError exception.
// 5. Return result.


// 如果你返回null,同样会报错,虽然null用typeof出来是object。如果你返回的是new String,或者new Number等对象类型,是不会报错的,但更糟糕的是会无限循环。因为你的done属性被认为一直是false,这里一定要小心。看规范中如何判断迭代器完成的:

// IteratorComplete ( iterResult )
// The abstract operation IteratorComplete with argument iterResult performs the following steps:
// 1. Assert: Type(iterResult) is Object.
// 2. Return ToBoolean(Get(iterResult, "done")).



//接着我们看一个有意思的扩展,JS的Number类型上是没有定义迭代器的,那么可不可以扩展一下,让Number变成可迭代的,YES!

if (!Number.prototype[Symbol.iterator]) {	
    Object.defineProperty(
        Number.prototype,
        Symbol.iterator,
        {	
            writable: true,	
            configurable: true, 
            enumerable: false,	
            value: function iterator(){	
                var i, inc, done = false, top = +this;	
                inc = 1 * (top < 0 ? -1 : 1);//判断正负值,确定迭代方向 
                return {	
                    [Symbol.iterator](){ return this; 
                },//iterator is iterable	
                next() {	
                    if (!done) {	
                        if (i == null) {
                            //初始设置0	
                            i = 0;	
                        }else if (top >= 0) {
                            //大于0的数,则从0到number	
                            i = Math.min(top,i + inc);	
                        }else{
                            //小于0的数,则从0到-number	
                            i = Math.max(top,i + inc);	
                        }

                        if (i == top) done = true; 
                        return { value: i, done: false };	
                    }else {	
                        return { done: true };	
                    }	
                }	
            };	
        }	
    });
}
// 然后我们就可以直接迭代数值类型了:
for(let i of 3){ 
    console.log(i)//0 1 2 3
}[...3]
//[0,1,2,3][...-3]
//[0,-1,-2,-3]


// 最后我们看几个迭代器的工具函数:
// 1)原来见过的,把Object变成可迭代的

function objectEntries(obj) {	
    let index = 0;	
    let propKeys = Object.getOwnPropertyNames(obj);//忽略Symbol类型的属性	
    return { 
        [Symbol.iterator]() {	
            return this;	
        },	
        next() {	
            if (index < propKeys.length) {	
                let key = propKeys[index];	
                index++;	
                return { value: [key, obj[key]] };	
            } else {	
                return { done: true };	
            }	
        }	
    };
}
let obj = { first: 'Jane', last: 'Doe' };
for (let [key,value] of objectEntries(obj)) {	
    console.log(`${key}: ${value}`);
}


// 2)根据参数,只返回迭代器的前几项
function take(n, iterable) {	
    let iter = iterable[Symbol.iterator]();	
    return {	
        [Symbol.iterator]() {	
            return this;	
        },	
        next() {	
            if (n > 0) {	
                n--;	
                return iter.next();	
            } else {	
                return { done: true };	
            }	
        }	
    };
}
let arr = ['a', 'b', 'c', 'd'];
for (let x of take(2, arr)) {	
    console.log(x);
}
// 上面这个方法,还可以处理无限循环的迭代器。


// 3)把多个迭代器转成多维数组形式

function zip(...iterables) {	
    let iterators = iterables.map(i => i[Symbol.iterator]());	
    let done = false;	
    return {	
        [Symbol.iterator]() {	
            return this;	
        }, 
        next() {	
            if (!done) {	
                let items = iterators.map(i => i.next());	
                done = items.some(item => item.done);	
                if (!done) {	
                    return { value: items.map(i => i.value) };	
                }	
            }	
            return { done: true };	
        }	
    }
}
let zipped = zip(['a', 'b', 'c'], ['d', 'e', 'f', 'g']);
for (let x of zipped) {	
    console.log(x);
}
//["a", "d"] ["b", "e"] ["c", "f"]

// *以上全部代码在Chrome 48下通过测试

{ // 声明
     let a1 = Symbol(); 
     let a2 = Symbol(); 
     console.log(a1 === a2); //false 
     let a3 = Symbol.for('a3'); 
     let a4 = Symbol.for('a3'); 
     console.log(a3 === a4); //true
}
{ 
    let a1 = Symbol.for('abc'); //当key值 
    let obj = { [a1]: '123', 'abc': 345, 'c': 456 }; 
    console.log('obj', obj); //abc:345,c:456,Symbol(abc):'123' 
    for (let [key, value] of Object.entries(obj)) { 
        // Object.entries方法返回一个数组,成员是参数对象自身的(不含继承的)所有可遍历( enumerable )属性的键值对数组。 
        // var obj = { foo: 'bar', baz: 42 }; 例如:
        // Object.entries(obj) => [ ["foo", "bar"], ["baz", 42] ] 
        console.log('let of', key, value, obj); 
        // let of abc 345 {abc:345,c:456,Symbol(abc):"123"};
        // let of c 456,{abc:345,c:456,Symbol(abc):"123"}
    } 
    Object.getOwnPropertySymbols(obj).forEach(function(item) { 
            console.log('111',obj[item]); //123 
        }) 
    Reflect.ownKeys(obj).forEach(function(item) {
            console.log('ownkeys', item, obj[item]);//abc 345,c 456,Symbol(abc) 123; 
    })
}
function changeDateFormat(cellval) { 
    if (cellval != null) { 
        var date = new Date(cellval); 
        var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1; 
        var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(); 
        var Hour = date.getHours(); 
        var Min = date.getMinutes(); 
        var Sen = date.getSeconds(); 
        return date.getFullYear() + "-" + month + "-" + currentDate + " " + getCorr(Hour) + ":" + getCorr(Min) + ":" + getCorr(Sen); 
    }
}
function getCorr(num) { 
    if (parseInt(num) < 10) { 
        num = '0' + num; 
    } 
    return num;
}
// 转换时间戳 
var format = function (time, format) { 
    var t = new Date(time); //毫秒
    var tf = function (i) { 
        return (i < 10 ? '0' : '') + i
    }; 
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) { 
        switch (a) { 
            case 'yyyy': 
                return tf(t.getFullYear()); 
                break; 
            case 'MM': 
                return tf(t.getMonth() + 1); 
                break; 
            case 'mm': 
                return tf(t.getMinutes()); 
                break; 
            case 'dd': 
                return tf(t.getDate()); 
                break; 
            case 'HH': 
                return tf(t.getHours()); 
                break; 
            case 'ss': 
                return tf(t.getSeconds()); 
                break; 
        } 
    })
} 
$("#statrtime").val(format(new Date().getTime(), 'yyyy/MM/dd HH:mm:ss'));
