/**
 * Generates random number between given intervals.
 *
 * @returns {Number}
 */
const between = (min, max) => Math.random() * (max - min) + min;

/**
 * Sets the time out with given intervals.
 * @returns {Promise}
 */
exports.wait = (min = 0, max = 3000) => {
  const time = between(min, max);
  return new Promise((resolve, rej) => setTimeout(() => resolve(time), time));
};
