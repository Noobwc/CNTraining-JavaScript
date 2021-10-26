//问题1
const removeRepeat = () => {
    const array = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b'];
    // todo
    const result = [...new Set(array)];
    // 输出[1, 2, 3, "a", "b"]
    console.log(result);
}
removeRepeat();

//问题2
const findRepeat = () => {
    const array = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b'];
    // todo
    var newArr = [];
    for (var j = 0; j < array.length; j++) {
        for (var i = j + 1; i < array.length; i++) {
            if (array[j] == array[i]) {
                newArr.push(array[i]);
            }
        }
    }
    // 输出[2, 3, "a"]
    console.log([...new Set(newArr)])
}
findRepeat();


//问题3
const clone = (obj) => {
    //todo
    if (typeof obj === 'function') {
        throw new TypeError('请传入正确的数据类型格式')
    }
    try {
        let josnData = JSON.stringify(obj)
        let newObj = JSON.parse(josnData)
        return newObj
    } catch (e) {
        console.log(e)
    }
}
let obj = {
    arr: [{a: 1, f: {q: 1}}, 2, 3],
    obj: {key: 'value'},
    string: 'hello world',
};
const obj1 = clone(obj);
obj['string'] = 'nihao'
console.log(obj1.string === obj.string);


//问题4
const question4= () => {
    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
    console.log(i)
    // todo
    for (var i = 0; i < 5; i++) {
        (function(j) {
            setTimeout(function () {
                console.log(j);
            }, 1000);
        })(i);
    }
    //修改代码输出 5,0,1,2,3,4
    console.log(i)
}
question4();

//问题5 声明会被提升（函数提升在变量之前）
// 所以先输出了function a() {}
// 然后就是输出两次666
// 最后输出了function() {};
