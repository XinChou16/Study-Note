// 移除数组 arr 中的所有值与 item 相等的元素，
// 直接在给定的 arr 数组上进行操作，并将结果返回
function removeWithoutCopy(arr, item) {    
    for (var i in arr) {        
        while (arr[i] == item) { 
            arr.splice(i, 1);        
        }    
    }    
    return arr;
}

removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2); // [1, 3, 4]


// 在数组 arr 末尾添加元素 item。
// 不要直接修改数组 arr，结果返回新的数组
//普通的迭代拷贝
var append1 = function (arr,item) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  newArr.push(item);
  return newArr;
}

//
var append2 = function (arr,item) {
  var newArr = arr.slice(0);
  newArr.push(item);
  return newArr;
}

//
var append3 = function (arr,item) {
  return arr.concat(item);
}
append1([1, 2, 3, 4],  10) // [1, 2, 3, 4, 10]
append2([1, 2, 3, 4],  10) // [1, 2, 3, 4, 10]
append3([1, 2, 3, 4],  10) // [1, 2, 3, 4, 10]

/*
  title: 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组
  Input: truncate([1, 2, 3, 4])
  Output: [1, 2, 3]
*/

// slice拷贝，也可以用for迭代，然后push
function truncate(arr) {
  // 终点取为长度减一，-1比较好
  return arr.slice(0,arr.length-1);
}
truncate([1, 2, 3, 4]);

// slice拷贝，只改变尾值
function truncate(arr) {
  // 终点取为-1
  return arr.slice(0,-1);
}
truncate([1, 2, 3, 4]);

// slice拷贝全部，然后pop删除最后一项
function truncate(arr) {
  var a = slice(0);
  a.pop();
  return a;
}
truncate([1, 2, 3, 4]);

/*
而var a =arr;这样的写法实际只是让a引用了arr，若进行修改，实际仍然修改了原数组。
  因此需要将原数组复制给一个新的数组，可以通过var a =
  arr.slice(0);实现。使用pop方法可以删除数组的最后一个元素。
  arr.concat();拷贝数组
*/


/* 添加元素
  Require: 在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
  Input: prepend([1, 2, 3, 4], 10)
  Output: [10, 1, 2, 3, 4]
*/

// 我做的
function prepend(arr, item) {
  // 先使用map复制数组
  var newArr = arr.map(function (item,index,array) {
    return item;
  });
  // 在复制的数组里，在最前面推入一个元素,unshift()方法会改变原数组，注意！
  newArr.unshift(item);
  return newArr;
}
prepend([1, 2, 3, 4], 10);

// 最简洁的代码
  function prepend(arr,item) {
    return [item].concat(arr);
  }
  prepend([1, 2, 3, 4], 10);

// 先拷贝，再添加
function prepend(arr,item) {
  var a = arr.slice(0);
  a.unshift(item);
  return a;
}

/*Summary
 不能改变原数组 - 拷贝，拷贝有多种方法
 在开头添加元素 - 使用unshift，concat等方法
*/




/* Issue Description
  Require:
  Input:
  Output:
*/



/* Summary

*/
