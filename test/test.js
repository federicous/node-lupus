'use strict';

/**
 * Dependencies.
 */
var assert = require('assert');
var looper = require('..');

/**
 * Tests.
 */
describe('looper()', function() {
  it('should increment the counter 10 times', function(done) {
    var counter = 0;

    looper(0, 10, function(n) {
      counter++;
    }, function() {
      assert.equal(counter, 10);
      done();
    });
  });

  it('should optionally accept a done callback', function(done) {
    looper(0, 10, function() {
      done();
    });
  });
});
