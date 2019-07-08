'use strict';

function collectSameElements(collectionA, objectB) {
  var result = [];
  var cc = objectB['value'];
  collectionA.forEach(function(object, index) {
    cc.forEach(function(itemB, indexB) {
      if(object['key'] === itemB) {
        result.push(itemB);
      }
    });
  })
  return result;
}
