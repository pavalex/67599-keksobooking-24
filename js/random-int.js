// Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomIntFromRange = function (from, to) {
  if (from < 0 || to <= from) {
    return;
  }
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

export {getRandomIntFromRange};
