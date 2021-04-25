const between = function (min, max) {
  return Math.random() * (max - min) + min;
};

exports.wait = () => {
  const time = between(0, 3000);
  return new Promise((resolve, rej) => setTimeout(() => resolve(time), time));
};