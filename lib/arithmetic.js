'use strict';



const arithmetic = module.exports = {};

arithmetic.add = function (a,b) {
  if  (typeof a != 'number' || typeof b != 'number') {
    return null;
  } else {
    return (a+b);
  }
};

arithmetic.subtract = function (a,b) {
  if  (typeof a != 'number' || typeof b != 'number') {
    return null;
  } else {
    return (a-b);
  }
};
