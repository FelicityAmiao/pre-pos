'use strict';

function countSameElements(collection) {
  var countObjs = {};
  collection.reduce(function(obj, currentValue) {
    if(currentValue.length === 1) {
      obj[currentValue] ? obj[currentValue]++ : obj[currentValue] = 1;
    }else {
      let splitArr = currentValue.split("-");
      obj[splitArr[0]] ? obj[splitArr[0]]+= parseInt(splitArr[1]): obj[splitArr[0]] = parseInt(splitArr[1]);
    }
    return obj;
  }, countObjs);
  var result = [];
  for(let key in countObjs) {
    let obj = {};
    obj['key'] = key;
    obj['count'] = countObjs[key];
    result.push(obj);
  }
  return result;
}
