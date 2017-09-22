'use strict';

const greet = require('../lib/greet.js');
const arithmetic = require('../lib/arithmetic.js');

const expect = require('expect');

//Greet Module Tests
describe( 'greet', function(){
  describe('hello', function() {
    it('should return null with non string parameters', function(){
      let result = greet.name('');
      expect(result).toBe(null);
    });
  });
});

describe( 'greet', function(){
  describe('hello world', function() {
    it('should return hello world', function(){
      let result = greet.name('world');
      expect(result).toBe('Hello world');
    });
  });
});

//Arithmetic Module Tests
//add
describe( 'arithmetic', function(){
  describe('add null', function() {
    it('should return null if a or b is not a number', function(){
      let result = arithmetic.add('string', 5);
      expect(result).toBe(null);
    });
  });
});

describe( 'arithmetic', function(){
  describe('add correct', function() {
    it('should return sum of a or b ', function(){
      let result = arithmetic.add(4, 5);
      expect(result).toEqual(9);
    });
  });
});

//subtract
describe( 'arithmetic', function(){
  describe('subtract null', function() {
    it('should return null if a or b is not a number', function(){
      let result = arithmetic.subtract('string', 5);
      expect(result).toBe(null);
    });
  });
});

describe( 'arithmetic', function(){
  describe('subtract correct', function() {
    it('should return the difference of a or b ', function(){
      let result = arithmetic.subtract(5, 3);
      expect(result).toBe(2);
    });
  });
});
