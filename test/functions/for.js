'use strict';

/**
 * Dependencies.
 */
var assert = require('assert');
var lupus  = require('../..');

/**
 * Tests.
 */
describe('lupus.for()', function() {

  it('should increment the counter 10 times', function(done) {
    var counter = 0;

    lupus.for(0, 10, function(n) {
      counter++;
    }, function() {
      assert.equal(counter, 10);
      done();
    });
  });

  it('should optionally accept a done callback', function(done) {
    var counter = 0;

    lupus.for(0, 10, function() {
        counter++;
        // callback is called only invoked in the last execution
        if(counter === 10){ done(); }
    });
  });

});
