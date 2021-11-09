import {getRandomIntFromRange} from './random-int.js';

// Данную функцию getArray честно подсмотрел в интернете

const getArray = (data) => {
  const maxLength = data.length;
  const lengthOfArray = getRandomIntFromRange(1, maxLength);
  const array = [];

  while ( array.length < lengthOfArray) {
    const indexOfEl = getRandomIntFromRange(0, maxLength - 1);
    const el = data[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }

  return array;
};

export {getArray};
