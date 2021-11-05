## 创建自定义对象的几种方法

1 new object
```javascript
var p = new Object()
p.name = 'Tom'
p.age = 12
p.setName = function (name) {
this.name = name
}

console.log(p.name, p.age)
p.setName('Bob')
console.log(p.name, p.age)
```

2 对象字面量
```javascript
const obj2 = {
    name: "Hello World",
    age: 26,
    isBoy: true,
    test: {
        id: 123,
        tel: 180
    },
    sayName: function() {
        console.log(this.name);
    }
};
console.log(obj2);
obj2.sayName();
```

3 工厂函数
```js
function createPerson(name, age) { 
    var obj = {
        name: name,
        age: age,
        setName: function (name) {
            this.name = name
        }
    }

    return obj
}

// 创建2个人
var p1 = createPerson('Tom', 12)
var p2 = createPerson('Bob', 13)
```

4 构造函数
```javascript
// 创建一个构造函数
function Student(name) {
    this.name = name; 
    this.sayHi = function () {
        console.log(this.name + '厉害了');
    };
}
var stu1 = new Student('smyh');
console.log(stu1);
stu1.sayHi();

var stu2 = new Student('vae');
console.log(stu2);
stu2.sayHi();
```

### new操作符
```js 
function myNew(func, ...args) {
    // 创建一个空对象
    let obj = {}
    // 将对象与构造函数原型链接起来
    Object.setPrototypeOf(obj, func.prototype)
    // 将构造函数的 this 指向新生成的空对象
    let result = func.apply(obj, args)
    // 最后返回新对象的实例
    return result
}
```

## 原型
![img.png](prototype.png)
```js
function Person() {}
var person = new Person();

console.log(person.__proto__ == Person.prototype) 
console.log(Person.prototype.constructor == Person)
console.log(Object.getPrototypeOf(person) === Person.prototype)
```

### 原型对象 constructor
```js
function Foo (name) {
    this.name = name;
}
var foo = new Foo('smyhvae');
console.log(foo instanceof Foo);
console.log(foo instanceof Object);
console.log(foo.__proto__ === Foo.prototype)
console.log(Foo.prototype.__proto__ === Object.prototype);
console.log(foo.__proto__.constructor === Foo);
console.log(foo.__proto__.constructor === Object);
```

### 原型查找
```js
function Person() {
}

Person.prototype.name = 'Kevin';
var person = new Person();

person.name = 'Daisy';
console.log(person.name) // Daisy

delete person.name;
console.log(person.name) // Kevin
```

### 原型的原型
```js
function Person() {}
var person = new Person();

console.log(Object.prototype.__proto__ === null) 
console.log(person.constructor === Person.prototype.constructor)
```

##继承的几种方式

### 构造函数继承
```js
function Parent1() {
    this.name = 'parent1 的属性';
}

function Child1() {
    Parent1.call(this);         
    this.type = 'child1 的属性';
}

Parent1.prototype.say = 'hello';
    
console.log(new Child1);
//用 call 或 apply 都行：改变 this 的指向
```

### 原型链继承

```js
function Parent() {
    this.name = 'Parent 的属性';
}

function Child() {
    this.type = 'Child 的属性';
}

Child.prototype = new Parent(); 

var child = new Child();
var child1 = new Child();
console.log(child);
console.log(child1);
console.log(child1.__proto__ === child.__proto__)
```

### 组合继承
```js
function Parent3() {
    this.name = 'Parent 的属性';
    this.arr = [1, 2, 3];
}

function Child3() {
    Parent3.call(this); //执行 parent方法
    this.type = 'Child 的属性';
}
Child3.prototype = new Parent3(); //第二次执行parent方法

var child = new Child3();
```

