'use strict';

/**
 * Dependencies.
 */
var assert = require('assert');
var lupus  = require('../..');

/**
 * Tests.
 */
describe('lupus.promisedFor()', function() {
  it('should get loop as promise and increment the counter 10 times', function() {
    var counter = 0;
    var promisedLoop = lupus.promisedFor(0, 10, function(n) { counter++; });

    return promisedLoop.then(function(count){
      assert.equal(counter, 10);
      assert.equal(count, 10);
    });
  });
});
