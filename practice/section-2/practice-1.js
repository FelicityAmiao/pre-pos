'use strict';

function countSameElements(collection) {
  var countObjs = {};
  collection.reduce(function(obj, currentValue) {
    obj[currentValue] ? obj[currentValue]++ : obj[currentValue] = 1;
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
