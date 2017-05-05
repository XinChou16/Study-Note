function palindrome(str) {
  // 匹配字母，数字一类字符
  var matchArr = str.match(/[a-zA-Z\d]/g);
  var reverseArr = matchArr.slice(0,matchArr.length);
  reverseArr.reverse();
  // 匹配到的字符串数组转化为字符
  var arr1 = matchArr.join('');
  var arr2 = reverseArr.join('');
  // 判断回文是否相等
  if (arr1.toLowerCase() ==  arr2.toLowerCase()) {
    return true;
  }
  else {
    return false;
  }
}
palindrome("eye");

// 1,使用正则匹配字母，数字一类字符
// 2，复制一个新数组，作为反转后的数组
// 3，将两个数组转化为字符串，一个数组为匹配到的数组，一个为反转
// 4，判断比较
