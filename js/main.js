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

  return Number((Math.random() * (to - from) + from).toFixed(count));
};

getRandomFloatRange(1.2, 3.4, 2);

/* ----------------- Генерация данных ----------------- */

const TITLES = [
  'Выгодное предложение',
  'Не упустите свой шанс',
  'Горячая скидка',
  'Цены снижены',
  'Пора бронировать',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Квартирка что надо',
  'Лучших апартаментов просто не бывает',
  'Здесь есть даже горячая вода',
  'Тихое уютное место и без соседей',
  'Да, маленькая. Зато уютная.',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

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

const createDataGeneration = () => {
  const randomNumberPhoto = getRandomIntFromRange(1, 10);
  const randomTitleIndex = getRandomIntFromRange(0, TITLES.length - 1);
  const randomLocationLat = getRandomFloatRange(35.65000, 35.70000, 5);
  const randomLocationLng = getRandomFloatRange(139.70000, 139.80000, 5);
  const randomPrice = getRandomIntFromRange(25000, 100000);
  const randomTypeIndex = getRandomIntFromRange(0, TYPES.length - 1);
  const randomRooms = getRandomIntFromRange(1, 5);
  const randomGuests = getRandomIntFromRange(1, 5);
  const randomCheckinIndex = getRandomIntFromRange(0, CHECKIN.length - 1);
  const randomCheckoutIndex = getRandomIntFromRange(0, CHECKOUT.length - 1);
  const randomArray = getArray(FEATURES);
  const randomDescriptionIndex = getRandomIntFromRange(0, DESCRIPTION.length - 1);
  const randomPhotos = getArray(PHOTOS);
  let zero = 0;

  if (randomNumberPhoto === 10) {
    zero = '';
  }


  return {
    author: {
      avatar: `img/avatars/user${zero}${randomNumberPhoto}.png`,
    },

    offer: {
      title: TITLES[randomTitleIndex],
      address: `${randomLocationLat}, ${randomLocationLng}`,
      price: randomPrice,
      type: TYPES[randomTypeIndex],
      rooms: randomRooms,
      guests: randomGuests,
      checkin: CHECKIN[randomCheckinIndex],
      checkout: CHECKOUT[randomCheckoutIndex],
      features: randomArray,
      description: DESCRIPTION[randomDescriptionIndex],
      photos: randomPhotos,
    },

    location: {
      lat: randomLocationLat,
      lng: randomLocationLng,
    },
  };
};

const similarObjects = Array.from({length: 10}, createDataGeneration);

