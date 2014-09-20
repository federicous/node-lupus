'use strict';


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
 */
module.exports = function(start, stop, callback) {
  var task, iterator;
  var current = start;

  iterator = function() {
    if (current >= stop) {
      clearInterval(task);
    } else {
      callback(current++);
    }
  }

  task = setInterval(iterator, 0);
};
