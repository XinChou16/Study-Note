/**
  * description: 计算一个整数的阶乘
  * 如果用字母n来代表一个整数，阶乘代表着所有小于或等于n的整数的乘积。
  *
**/

function factorialize(num) {
  if (num !== 0) {
    var result = num*factorialize(num - 1);
  }else {
    var result = 1;
  }
  return result;
}

factorialize(5);
factorialize(10);
factorialize(20);
factorialize(0);
// factorialize(5) 应该返回一个数字
// factorialize(5) 应该返回 120.
// factorialize(10) 应该返回 3628800.
// factorialize(20) 应该返回 2432902008176640000.
// factorialize(0) 应该返回 1.
