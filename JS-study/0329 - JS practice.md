## 找出元素 item 在给定数组 arr 中的位置

### 输出描述
> 如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1

### 输入例子
``` javascript
 indexOf([ 1, 2, 3, 4 ], 3)
```
### 输出例子
2

## Code
``` javascript
function indexOf(arr, item) {
	return arr.indexOf(item);
}
indexfOf([1,2,3,4],3);

```
## Better Code
``` javascript

function indexOf(arr, item) { 
    // 判断是否存在原生方法，有的话就使用原生方法 
    if (Array.prototype.indexOf) {    
        return arr.indexOf(item);  
    } 
  // 没有的话就使用for迭代判断
    else {    
        for (var i = 0; i < arr.length; i++) {      
            if (arr[i] === item) {        
                return i;      
            }    
        }  
    }     
    return -1;
}

```




## 计算给定数组 arr 中所有元素的总和 

### 输出描述
> 数组中的元素均为 Number 类型

### 输入例子
``` javascript
sum([ 1, 2, 3, 4 ])

```
### 输出例子
10
## Code
``` javascript
function sum(arr) {
	var sumResult = arr.reduce(function(prev,cur,index,array){
        return prev + cur;
    });
    return sumResult;
}

sum([ 1, 2, 3, 4 ]);

```


## Better Code
``` javascript
// 使用原生给定的reduce迭代方法
function sum(arr) {    
    return arr.reduce(function(prev, curr, idx, arr) {        
        return prev + curr;    
    });
}

// 使用foreach方法，这个方法没有返回值的，注意！！
function sum(arr) {    
    var s = 0;    
    arr.forEach(function(item,index,array) {        
        s += array;    
    }, 0);      
    return s;
};

// 使用eval方法，添加加号符进行计算
function sum(arr) {    
    return eval(arr.join("+"));
};
```

## 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组 


### 输入例子
``` javascript
remove([1, 2, 3, 4, 2], 2)

```
### 输出例子
``` javascript
[1,3,4]
```
## Code
``` javascript
function remove(arr, item) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
	  if (arr[i] !== item) {
	    result.push(arr[i]);
	  }
	};
    return result;
}
remove([1, 2, 3, 4, 2], 2);
```



## 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回

### 输出描述
> 数组中

### 输入例子
``` javascript
removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2)

```
### 输出例子
``` javascript
[1, 3, 4]
```
## Code
``` javascript
function removeWithoutCopy(arr, item) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == item) {
			// 满足条件的话，删除一项，后面一项往前移，i减1
			arr.splice(i,1);
			i--;
		}
	}
    return arr;
};

removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2);

```