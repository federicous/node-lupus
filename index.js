'use strict';

/**
 *  - The object exported contains two functions that simulate the for loop in an async fashion.
 *  - The first function can be used with an ending callback which will be called in the last iteration,
 *  - The second function returns a promise that will be resolved when the loop is over.
 */

module.exports = {
  /**
   * This function allows you to safely loop over a range of incrementing integers
   * in an asynchronous fashion.
   *
   * @method
   * @public
   *
   * @param {Integer} start - The number at which to start looping (inclusive).
   * @param {Integer} stop - The number at which to stop looping (exclusive).
   * @param {Function} callback - The callback to run at each iteration of the
   *   loop. The callback should have signature: callback(num) where num is the
   *   integer being processed.
   *  @param {Function} done - The OPTIONAL callback to run once the loop has been
   *    fully iterated over.
   */
  for : function(start, stop, callback, done) {
    var task, iterator;
    var current = start;

    task = setInterval(function() {
      if (current >= stop) {
        clearInterval(task);
        if (done) {
          done();
        }
      } else {
        callback(current++);
      }
    }, 0);
  },

  /**
   * This function returns a promise of looping over a range of incrementing integers
   * in an asynchronous fashion.
   *
   * @method
   * @public
   *
   * @param {Integer} start - The number at which to start looping (inclusive).
   * @param {Integer} stop - The number at which to stop looping (exclusive).
   * @param {Function} callback - The callback to run at each iteration of the
   *   loop. The callback should have signature: callback(num) where num is the
   *   integer being processed.
   */
  promisedFor : function(start, stop, callback) {
    return new Promise(function(resolve, reject){
      var task, iterator;
      var current = start;

      iterator = function() {
        if (current >= stop) {
          clearInterval(task);
          resolve(current);
        } else {
          callback(current++);
        }
      }

      task = setInterval(iterator, 0);
    });
  }
};
