'use strict';



const arithmetic = module.exports = {};

arithmetic.add = function (a,b) {
  if  (a === null || b === null) {
    throw new Error('null');
  } else {
    return (a+b);
  }
};

arithmetic.subtract = function (a,b) {
  if  (a === null || b === null) {
    throw new Error('null');
  } else {
    return (a-b);
  }
};
