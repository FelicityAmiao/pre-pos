'use strict';

function collectSameElements(collectionA, objectB) {
  var result = [];
  var cc = objectB['value'];
  collectionA.forEach(function(item, index) {
    cc.forEach(function(itemB, indexB) {
      if(item === itemB) {
        result.push(item);
      }
    });
  });
  return result;
}
