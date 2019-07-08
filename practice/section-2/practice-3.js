'use strict';

function countSameElements(collection) {
  var countObjs = {};
  collection.reduce(function(obj, curr) {
    if(curr.length === 1) {
      obj[curr]? obj[curr]++: obj[curr] = 1;
    }else {
      var currArr = curr.split(/\W+/);
      obj[currArr[0]]? obj[currArr[0]] += parseInt(currArr[1]): obj[currArr[0]] = parseInt(currArr[1]);
    }
    return obj;
  }, countObjs);
  var result = [];
  for(let key in countObjs) {
    let obj = {};
    obj['name'] = key;
    obj['summary'] = countObjs[key];
    result.push(obj);
  }
  return result;
}
