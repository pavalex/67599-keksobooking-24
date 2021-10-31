const similarObjectsTemplate = document.querySelector('#card').content.querySelector('.popup');

const createPopup = ({offer, author}) => {
  const objectsElement = similarObjectsTemplate.cloneNode(true);
  const popupTitle = objectsElement.querySelector('.popup__title');
  const popupTextAddress = objectsElement.querySelector('.popup__text--address');
  const popupTextPrice = objectsElement.querySelector('.popup__text--price');
  const popupType = objectsElement.querySelector('.popup__type');
  const popupTextCapacity = objectsElement.querySelector('.popup__text--capacity');
  const popupTextTime = objectsElement.querySelector('.popup__text--time');
  const popupFeatures = objectsElement.querySelector('.popup__features');
  const popupDescription = objectsElement.querySelector('.popup__description');
  const popupPhotos = objectsElement.querySelector('.popup__photos');
  const popupAvatar =  objectsElement.querySelector('.popup__avatar');

  if (offer.title) {
    popupTitle.textContent = offer.title;
  } else {
    popupTitle.remove();
  }

  if (offer.address) {
    popupTextAddress.textContent = offer.address;
  } else {
    popupTextAddress.remove();
  }

  if (offer.price) {
    popupTextPrice.textContent = `${offer.price} ₽/ночь`;
  } else {
    offer.price.remove();
  }

  let housing;
  switch(offer.type) {
    case 'flat':
      housing = 'Квартира';
      break;
    case 'bungalow':
      housing = 'Бунгало';
      break;
    case 'house':
      housing = 'Дом';
      break;
    case 'palace':
      housing = 'Дворец';
      break;
    case 'hotel':
      housing = 'Отель';
      break;
  }

  if (offer.type) {
    popupType.textContent = housing;
  } else {
    popupType.remove();
  }

  if (offer.rooms && offer.guests) {
    popupTextTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    popupTextTime.remove();
  }

  if (offer.checkin && offer.checkout) {
    popupTextCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  } else {
    popupTextCapacity.remove();
  }

  if (offer.features) {
    const newOfferFeatures = offer.features.map((feature) => `<li class="popup__feature popup__feature--${feature}"></li>`).join('');
    popupFeatures.innerHTML = newOfferFeatures;
  } else {
    popupFeatures.remove();
  }

  if (offer.description) {
    popupDescription.textContent = offer.description;
  } else {
    popupDescription.remove();
  }

  if (offer.photos) {
    offer.photos.forEach((offerPhoto) => {
      popupPhotos.querySelector('.popup__photo').src = offerPhoto;
    });
  } else {
    popupPhotos.remove();
  }

  if (author.avatar) {
    popupAvatar.src = author.avatar;
  } else {
    popupAvatar.remove();
  }

  return objectsElement;
};

export {createPopup};
