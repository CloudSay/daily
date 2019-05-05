# markdown文件的基本常用编写语法

## 1、标题的几种写法

* 第一种：
> # 一级标题
> ## 二级标题
>   .
>   .
>   .
> ####### 七级标题
* 第二种：
> 这是一级标题
==============
> 这是二级标题
-------------
* 第三种：
> # 一级标题 #
> ## 二级标题 ##

## 2、列表

> 无序列表可以用* ， + ， — 来创建，用在线编辑器看，实际上是转换成了ul>li ，所以使用哪个都可以，推荐使用*吧
> 有序列表就相对简单一点，只有这一种方式，注意，数字后面的点只能是英文的点，特别注意，有序列表的序号是根据第一行列表的数字顺序来的
> 1. 列表1
> 2. 列表2
> 3. 列表3

## 3、区块引用

* 比如说，你想对某个部分做的内容做一些说明或者引用某某的话等，可以用这个语句
> 区块引用区块引用区块引用区块引用区块引用区块引用区块引用区块引用区块引用区块引用区块引用区块引用区块引用区块引用区块引用区块引用
* 引用嵌套
> 一级引用
>> 二级引用
>>> 三级引用
>>>> 四级引用
>>>>> 五级引用
>>>>>> 六级引用

## 4、华丽的分割线

***
************
----------
- - - 
* * *
_ _ _

## 5、链接
![图片](http://pic1.win4000.com/wallpaper/9/5450ae2fdef8a.jpg)
[src]:http://pic1.win4000.com/wallpaper/9/5450ae2fdef8a.jpg
这里是![src]

### 行内式
[妙语连珠](http://wwww.baidu.com)是什么意思？
### 参数式
[name]:http://wwww.baidu.com/name "名称"
[home]:http://wwww.baidu.com/home "首页"
[也支持中文]:http://wwww.baidu.com/ "test"

这里是[name]，这里是[home]，这里是[也支持中文]

## 6、图片

## 7、代码框
* 单行
`import api from '../../../../../System resolution/web-rule-sys/src/api/api';`
* 多行
```可以写注释
      // 筛选变量
      if (this.search.variable === '') {
        listArray = questionListDateStorage;
      } else {
        for (let listKey in questionListDateStorage) {
          var variables = questionListDateStorage[listKey].variables;
          for (let varKey in variables) {
            var name = variables[varKey].name;
            console.log(name.indexOf(this.search.variable));
            if (name.indexOf(this.search.variable) >= 0) {
              listArray.push(questionListDateStorage[listKey]);
              break;
            }
          }
        }
      }
```
## 8、表格

| name | age | sex |
|:-----|:------|:------:|
| tony | 20 | 男 |
| lucy | 18 | 女 |

表头一 | 表头二
------ | -----
content cell | content cell
content cell | content cell

学号|姓名|分数
-|-|-
小明|男|75
小红|女|79
小陆|男|92|

## 9、强调
*字体倾斜*
_字体倾斜_
**字体加粗**
__字体加粗__

## 10、转义
* \\
* 基本上跟js转义是一样的

## 11、删除线
~~请删掉我把~~

