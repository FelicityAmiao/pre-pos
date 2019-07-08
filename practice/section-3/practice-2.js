'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var bArr = objectB['value'];
  collectionA.forEach(function(obj) {
    bArr.forEach(function(item) {
      if(obj['key'] === item) {
        obj['count'] < 3? obj['count']--: obj['count']-= (Math.floor(obj['count'] / 3));
      }
    });
  });
  return collectionA;
}
