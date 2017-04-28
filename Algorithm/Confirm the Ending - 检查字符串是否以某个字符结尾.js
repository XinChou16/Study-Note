
// 1，复制与target长度相等的最后几个字符
// 2，判断是否相等

function confirmEnding(str, target) {
  // 1，复制与target长度相等的最后几个字符
  var endStr = str.substr(-target.length);
  // 2，判断是否相等
  if (endStr == target) {
    return true;
  }else {
    return false;
  }
}

confirmEnding("Bastian", "n");
