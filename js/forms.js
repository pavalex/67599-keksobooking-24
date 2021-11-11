import {sendData} from './api.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const COORDINATE_ROUNDING = 5;
const POST_URL = 'https://24.javascript.pages.academy/keksobooking';

const adForm = document.querySelector('.ad-form');
const fieldsetDisabled = adForm.querySelectorAll('fieldset');
const inputTitle = adForm.querySelector('#title');
const inputPrice = adForm.querySelector('#price');
const buttonSendForm = adForm.querySelector('.ad-form__submit');
const resetButton = adForm.querySelector('.ad-form__reset');
const capacitySelect = adForm.querySelector('#capacity');
const roomNumber = adForm.querySelector('#room_number');
const typeSelect = adForm.querySelector('#type');
const priceSelect = adForm.querySelector('#price');
const timeInSelect = adForm.querySelector('#timein');
const timeOutSelect = adForm.querySelector('#timeout');
const addressArea = document.querySelector('#address');

// Неактивное состояние
const getPageInactiveState = () => {
  adForm.classList.add('ad-form--disabled');
  fieldsetDisabled.forEach((fieldsetItem) => {
    fieldsetItem.setAttribute('disabled', true);
  });
};

// Активное состояние
const getPageActiveState = () => {
  adForm.classList.remove('ad-form--disabled');
  fieldsetDisabled.forEach((fieldsetItem) => {
    fieldsetItem.removeAttribute('disabled');
  });
};

// Выбор адреса на карте
const addAddRess = (lat, lng) => {
  const latitude = lat.toFixed(COORDINATE_ROUNDING);
  const longitude = lng.toFixed(COORDINATE_ROUNDING);
  addressArea.value = `${latitude}, ${longitude}`;
};

// Валидация заголовка объявления
const onTitleInput = () => {
  const valueLength = inputTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    inputTitle.setCustomValidity(`Заголовок должен состоять минимум из ${MIN_TITLE_LENGTH} символов`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    inputTitle.setCustomValidity(`Заголовок не должен превышать ${MAX_TITLE_LENGTH} символов`);
  } else {
    inputTitle.setCustomValidity('');
  }
  inputTitle.reportValidity();
};

inputTitle.addEventListener('input', onTitleInput);

// Валидация цены за ночь
const onPriceInput = () => {
  const valuePrice = inputPrice.value;

  if (valuePrice > MAX_PRICE) {
    inputPrice.setCustomValidity(`Стоимость не может превышать ${MAX_PRICE}`);
  } else {
    inputPrice.setCustomValidity('');
  }
  inputPrice.reportValidity();
};

inputPrice.addEventListener('input', onPriceInput);

// Валидация количества комнат и количества мест
const roomsForCapacities = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const onRoomsNumberSelect = () => {
  const variantCapacityOptions = capacitySelect.querySelectorAll('option');
  const roomsNumber =  Number(roomNumber.value);
  const quantityCapacities = roomsForCapacities[roomsNumber];

  variantCapacityOptions.forEach((option) => {
    option.disabled = true;
  });

  quantityCapacities.forEach((places) => {
    variantCapacityOptions.forEach((option) => {
      if (Number(option.value) === places) {
        option.disabled = false;
      }
    });
    if (!quantityCapacities.includes(Number(capacitySelect.value))) {
      const maxCapacity = quantityCapacities[quantityCapacities.length - 1];
      capacitySelect.value = maxCapacity;
    }
  });
};

roomNumber.addEventListener('change', onRoomsNumberSelect);

// Валидация тип жилья
const minPriceHousing = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const onTypeOfHousingChange = () => {
  priceSelect.placeholder = minPriceHousing[typeSelect.value];
  priceSelect.min = minPriceHousing[typeSelect.value];
};

typeSelect.addEventListener('change', onTypeOfHousingChange);

// Валидация время заезда-время выезда
const onTimeInChange = () => {
  timeOutSelect.value = timeInSelect.value;
};

const onTimeOutChange = () => {
  timeInSelect.value = timeOutSelect.value;
};

timeInSelect.addEventListener('change', onTimeInChange);
timeOutSelect.addEventListener('change', onTimeOutChange);

buttonSendForm.addEventListener('click', onTitleInput, onPriceInput, onRoomsNumberSelect);

// Отправить форму
const setUserFormSubmit = (onSuccess, onFail) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      POST_URL,
      () => onSuccess(),
      () => onFail(),
      new FormData(evt.target));
  });
};

export {
  getPageActiveState,
  getPageInactiveState,
  addAddRess,
  addressArea,
  setUserFormSubmit,
  adForm,
  resetButton,
  onTypeOfHousingChange,
  onRoomsNumberSelect
};
