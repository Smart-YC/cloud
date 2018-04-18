const name = "tom";
const age = "20";

class Parent{
  hw(){
    console.log(`hello world`)
  }
  static obj(){
    console.log('obj')/*表示为静态方法不回呗实例继承，而是直接通过类调用。*/
  }
}
var parent = new Parent()
parent.hw()//hell world

export{name,age,Parent}
