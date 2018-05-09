//定义类
class person {
  constructor(name){
     // this。实例属性 = 值
    this.name =“alex”;
    this._address='外滩18号';
  }
   show(){
     console.log('展示'，this.name,this.job)
   }

   get address(){
     console.log('getter:处理，拦截');
      this._address =val
   }
}
class  worker extends person{
  constroctor (name,job){
    super(name);
    this.job = job || '码农'
  }
  show (){
    console.log("展示时"，this.job)
  }
}
// 实例化
// let p1 = new person ('doudou')
// p1 == 实例
// p1.show()
let w1 = new worker ('doudou')
// p1 == 实例
w1.show()
