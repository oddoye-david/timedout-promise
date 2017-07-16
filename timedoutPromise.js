
/**
 * Promisified Timeout function that rejects after ms milliseconds
 *
 * @param {Number} ms
 * @returns Promise
 */
function timeout(ms) {
  if (typeof ms !== 'number' || isNaN(ms)) {
    throw new Error('ms must be a number');
  } else if (ms < 1) {
    throw new Error('ms must be greater than 1');
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Timed out in ${ms}ms.`);
    }, ms)
  });
}


/**
 * Function to timeout promises.
 *
 * @param {Number} ms
 * @param {Function} promiseFunc
 * @returns Promise
 */
function timedoutPromise(ms, promiseFunc) {
  if (!promiseFunc) {
    throw new Error('promiseFunc is required');
  }

  return Promise.race([timeout(ms), promiseFunc]);
}

module.exports = timedoutPromise;