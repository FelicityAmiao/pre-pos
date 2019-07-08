'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var cObject = {};
  collectionA.reduce(function(obj, curr) {
    if(curr.length === 1) {
      obj[curr]? obj[curr]++: obj[curr] = 1;
    }else {
      let currArr = curr.split("-");
      obj[currArr[0]]? obj[currArr[0]] += parseInt(currArr[1]): obj[currArr[0]] = parseInt(currArr[1]);
    }
    return obj;
  }, cObject);
  //transform the object to object array
  var cArr = [];
  for(let key in cObject) {
    let obj = {};
    obj['key'] = key;
    obj['count'] = cObject[key];
    cArr.push(obj);
  }
  var bArr = objectB['value'];
  bArr.forEach(function(b) {
    cArr.forEach(function(c) {
      if(c['key'] === b) {
        c['count'] < 3? c['count']--: c['count'] -= Math.floor(c['count'] / 3);
      }
    });
  });
  return cArr;
}
