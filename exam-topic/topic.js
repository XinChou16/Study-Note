/**
 * 实现一个flatten函数，将一个嵌套多层的数组 array（数组） (嵌套可以是任何层数)转换为只有一层的数组，
 * 数组中元素仅基本类型的元素或数组，不存在循环引用的情况。 Ex:
 */
// flatten([1, [2], [3, [[4]]]]) => [1, 2, 3, 4];

var flatten = function(arr) {
    let flattenArr = [];
    function _flat(arr) {
        arr.forEach( item => {
            if(! Array.isArray(item)) {
                flattenArr.push(item);
            }else {
                _flat(item);
            }

        })
    }
    _flat(arr); // 声明的一定要调用
    return flattenArr;
}

flatten([1, [true], ['xin', [[4]]]]);  //[1, true, "xin", 4]

var flatten = function(arr) {
   return arr.reduce( (initArr,currentArr) => {
        return initArr.concat( Array.isArray(currentArr) ? flatten(currentArr) : currentArr)
   },[])
}

flatten([1, [true], ['xin', [[4]]]]);  //[1, true, "xin", 4]


/**
 * 实现一个reduce函数，作用和原生的reduce类似。
 * reduce(list, iteratee, [memo])，memo是reduce函数的初始值
 * 会被每一次成功调用iteratee函数的返回值所取代 。
 * 这个迭代传递4个参数：memo,value 和 迭代的index和最后一个引用的整个 list。
 * 如果没有memo传递给reduce的初始调用，iteratee不会被列表中的第一个元素调用。
 * 第一个元素将取代memo参数传递给列表中下一个元素调用的iteratee函数。
 */





 var sum = reduce([1, 2, 3], function(memo, num){
     return memo + num;
 },0)



/**
 * 实现一个map函数，模拟原生的map函数，map(list, iteratee)。
 * 通过对list里的每个元素调用转换函数(iteratee迭代器)生成一个与之相对应的数组。
 * iteratee传递三个参数：value，然后是迭代 index。
 */
function map(list, iteratee) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
      result[i] = iteratee(list[i], i, list)
    }
    return result;
}

map([1, 2, 3], num => num*3)


/**
 * 实现一个find函数，模拟原生的find函数，find(list, predicate)。
 * 在list中逐项查找，返回第一个通过predicate迭代函数真值检测的元素值，
 * 如果没有元素通过检测则返回 undefined。 如果找到匹配的元素，函数将立即返回，
 * 不会遍历整个list。
 * @param {*arr} list 
 * @param {*function} predicate 
 */
function find(list, predicate) {
  for (var i = 0; i < list.length; i++) {
    if( predicate(list[i], i, list)) {
        return list[i];
    }
  }
}

var even = find([1, 2, 3, 4, 5, 6], num => num % 2 ==0); // 2


/**
 * 实现一个filter函数，模拟原生的filter函数，filter(list, predicate)。
 * 遍历list中的每个值，返回所有通过predicate真值检测的元素所组成的数组。
 * @param {*arr} list 
 * @param {*function} predicate 
 */
function filter(list, predicate) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
      if( predicate(list[i], i, list)) {
         result.push(list[i])
      }
    }
    return result;
}

filter([1, 2, 3, 4, 5, 6], num => num % 2 ==0); // 2


/**
 * 实现一个invoke函数，invoke(list, methodName, arguments)
 * 在list的每个元素上执行methodName方法。 任何传递给invoke的额外参数，
 * invoke都会在调用methodName方法的时候传递给它。
 * @param {*arr} list 
 * @param {*string} method 
 */
function invoke(list,method) {
    let args = [].slice.call(arguments,2);
    return list.map( value => {
        let func = typeof method == 'function' ? method : value[method];
        return func.apply(value,args)
    })
}

invoke([[5, 1, 7], [3, 2, 1]], 'sort');

// 通过字符串来调用方法
var func = []['slice']
var arr = [3,2,1]
func.call(arr,1) // [2, 1]


/**
 * 实现一个create函数，模拟原生的new操作符。
 * @param {*obj} construct 
 */
function create(construct) {
    var args = [].slice.call(arguments, 1);
    // 1.新建一个空对象
    var obj = {};

    // 2.将对象的原型设置为空对象
    Object.setPrototypeOf(obj, construct.prototype);
    // obj._proto_ = construct;

    // 3.将this指向空对象
    var res = construct.apply(obj, args)
    if (typeof res === "object" && res !== null) {
        return res;
      }
    // 4.返回这个新建的空对象
    return obj;
}

// Test1
function Person(name) {
    this.name = name;
}
Person.prototype = {
    age: 23
}
var p1 = create(Person, 'xinxin')
p1;
// Test2
function Preson(name, age) {
    this.name = name;
    this.age = age;
  }
Preson.prototype = {
    protype: "type"
}
var test = create(Preson, "adam", 19);
console.log(test); //{name:"adam",age:19};
console.log(test.protype) //type



/**
 * 2018年1月11日 19:59:21
 */
// 写一个函数 isEmptyObject，判断一个对象是不是空对象 
function isEmptyObject(obj){
  // todo...
}
isEmptyObject( {} ); //true
isEmptyObject( {a:1} ) ; //false 

// 如果可以用 ES5，那么你会如何写这个函数？ 

// ES5
function isEmptyObject(obj) {
    for( key in obj) {
        if(obj.hasOwnProperty(key) && obj[key] != undefined) {
            return false;
        }
    }
    return true;
}

// ES6
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

isEmptyObject( {} ); //true
isEmptyObject( {a:1} ) ; //false 

// JS字符串操作相关问题
// 请用JavaScript 实现一个方法，该方法能够判断两个字符串是否匹配, 

function isMatch(str1, str2) {
    return str1.split('').sort().join('') === str1.split('').sort().join('');
}

isMatch('something', 'ginhtemos')  // true
isMatch('aaa', 'aa')  //false
isMatch('abb', 'baa')  //false
isMatch('hello', 'olelh')  //true


// JS引用类型相关问题
function swap(x, y){
    var temp = x;
    x = y;
    y = temp;  
}

var a = 1
var b = 2
swap(a, b)
console.log(a) //输出什么 -> 1
console.log(b) //输出什么 -> 2

var obj1 = {name: 'xinxin'}
var obj2 = {age: 24}
swap(obj1, obj2)
console.log(obj1)  //输出什么
console.log(obj2)  //输出什么


// JS运算符typeof相关问题

var str = new String("Hello");
	
var result = typeof(str instanceof String);
alert(result); //What is the output of the alert? 'Boolean'

result = typeof typeof(str instanceof String);
alert(result); //What is the output of the alert? 'String'

result = typeof typeof typeof(str instanceof String);
alert(result); //What is the output of the alert? 	'String'

// 运算符
/**
 * 含有布尔操作符，会转换成布尔值
 * x = true + (false, true), 括号优先级最高，逗号操作符得到，true
 * x = true + true,因为有加号操作符，所以x = 1 + 1 -> 2，结果为2
 */

var x = !!"Hello" + (!"world", !!"from here!!");
alert(x); // 2


// JS声明前置相关问题
// 会不会报错?
var y = 10;

if (!(x in window)) {
    var x = 10; // var会提前到块级作用域的开始
} else {
    ++y;
}

alert(x); // undefined
alert(y); // 11


// 问题: ~的作用是什么? ~4的结果是多少？为什么?
// ~: 转换成二进制数后，取反，负值再减去1，
~4 //-5
~12 //-13
