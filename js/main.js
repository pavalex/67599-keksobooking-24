// Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomIntFromRange = function (from, to) {
  if (from < 0 || to <= from) {
    return;
  }
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

getRandomIntFromRange(5, 15);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

const getRandomFloatRange = function (from, to, count) {
  if (from < 0 || to <= from) {
    return;
  }

  return (Math.random() * (to - from) + from).toFixed(count);
};

getRandomFloatRange(1.2, 3.4, 2);
