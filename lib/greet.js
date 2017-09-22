'use strict';

const greet = module.exports = {};

greet.name = function(name){

  if (!name || typeof name != 'string') {
    return null;
  } else {
    return 'Hello ' + name;
  }
};
