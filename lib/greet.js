'use strict';

const greet = module.exports = {};

greet.name = function(){

  if (name.length === 0) {
    throw new Error('provide a name please');
  } else {
    return 'Hello ' + name;
  }
};
