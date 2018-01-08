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














