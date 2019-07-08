'use strict';

function collectSameElements(collectionA, collectionB) {
  var cc = collectionB[0];
  var result = [];
  collectionA.forEach(function(item, index) {
    cc.forEach(function(itemB, indexB) {
      if(item === itemB) {
        result.push(item);
      }
    });
  });
  return result;
}
