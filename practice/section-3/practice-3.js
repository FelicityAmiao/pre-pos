'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var cObj = {};
  collectionA.reduce(function(obj, curr) {
    obj[curr]? obj[curr]++: obj[curr] = 1;
    return obj;
  }, cObj);
  var bArr = objectB['value'];
  for(let key in cObj) {
    bArr.forEach(function(item) {
      if(key === item) {
        cObj[key] < 3? cObj[key]--: cObj[key] -= Math.floor(cObj[key] / 3);
      }
    });
  }
  var resultArr = [];
  for(let key in cObj) {
    let rObj = {};
    rObj['key'] = key;
    rObj['count'] = cObj[key];
    resultArr.push(rObj);
  }
  return resultArr;
}
