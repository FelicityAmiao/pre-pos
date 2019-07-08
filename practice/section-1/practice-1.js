'use strict';

function collectSameElements(collectionA, collectionB) {
  var result = [];
  collectionA.forEach(function(item, index) {
    collectionB.forEach(function(itemB, indexB) {
      if(item === itemB) {
        result.push(item);
      }
    });
  });
  return result;
}
