import {name, age, Parent} from 'parent'


class Child extends Parent {
  constructor(obj) {/*就是new命令自动跳用方法。一个类必须要有constructor，如果没定义，有默认添加一个空的。*/
    super()//调用父类的constructor()
    this._config = obj;
    console.log(obj.name + "年龄" + obj.age)
  }

  hw() {
    console.log("hw")
  }

  set val(value) {
    this._config.name = value;
    console.log(`name=${value}`)
  }

  get val() {
    console.log(this._config.name);
  }
}

Child.obj()//obj 继承父类static方法
var model = new Child({name, age}) //tom年龄20
model.hw()//hw
model.val = "jock"; //name=jock
model.val//jock
