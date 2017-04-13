/**
  * description: 翻转字符串
  * 先把字符串转化成数组，
  * 再借助数组的reverse方法翻转数组顺序，
  * 最后把数组转化成字符串。
  *
**/
function reverseString(str) {
  if (typeof str == "string") {
    var newStr = str.split('').reverse().join('');
  }

  return newStr;
}

reverseString("hello");
//reverseString("hello") 应该返回一个字符串
// reverseString("hello") 应该返回 "olleh".
// reverseString("Howdy") 应该返回 "ydwoH".
// reverseString("Greetings from Earth") 应该返回 "htraE morf sgniteerG".
