// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

const getRandomFloatRange = function (from, to, count) {
  if (from < 0 || to <= from) {
    return;
  }

  return Number((Math.random() * (to - from) + from).toFixed(count));
};

export {getRandomFloatRange};
