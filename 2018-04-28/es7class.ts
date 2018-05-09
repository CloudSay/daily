class person{
  // 实例属性 = 值
   public name:string= 'alex'  //定义+初始化  默认就是public(类内类外都可以访问)
   age//定义
   private readonly IDcard:string = '340825995107494'
   protected money:number = 10000000000  //类内或者在子类内可以访问
   static VER // 静态属性|类属性
   constructor (name?:string){
     this.name = name
     this.age = 18;
     this.address = '1号';//不能定义
   }
   // 实例方法
   private show():void{
     console.log('展示',this.name,this.age)
   }
  // 类方法|静态方法
   static info () {
     this.VER;  // 拿到类成员  this == 类
     this.info()
   }
}

class Worker extends person {
  constroctor(name){
    super (name)
  }
  show (){
    this.name,this.age
  }
}

// let p1 = new person ('doudou')
// p1.name
// person.VER


let W1 = new Worker ('doudou')
W1.name
Worker.VER
