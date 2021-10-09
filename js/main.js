import {getRandomIntFromRange} from './random-int.js';
import {getRandomFloatRange} from './random-float.js';
import {getArray} from './get-array.js';
import {TITLES, TYPES, CHECKIN, CHECKOUT, FEATURES, DESCRIPTION, PHOTOS} from './data.js';

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


