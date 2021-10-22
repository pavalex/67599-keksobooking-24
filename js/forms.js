const adForm = document.querySelector('.ad-form');
const fieldsetDisabled = adForm.querySelectorAll('fieldset');
const inputTitle = adForm.querySelector('#title');
const inputPrice = adForm.querySelector('#price');
const buttonSendForm = adForm.querySelector('.ad-form__submit');
const mapFiltres = document.querySelector('.map__filters');
const mapFiltresDisabled = mapFiltres.querySelectorAll('.map__filter');
const mapFeatures = mapFiltres.querySelector('.map__features');
const capacitySelect = adForm.querySelector('#capacity');
const roomNumber = adForm.querySelector('#room_number');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

// Неактивное состояние
const getPageInactiveState = () => {
  adForm.classList.add('ad-form--disabled');
  fieldsetDisabled.forEach((fieldsetItem) => {
    fieldsetItem.setAttribute('disabled', true);
  });

  mapFiltres.classList.add('ad-form--disabled');
  mapFiltresDisabled.forEach((mapFilterItem) => {
    mapFilterItem.setAttribute('disabled', true);
  });

  mapFeatures.classList.add('ad-form--disabled');
  mapFeatures.setAttribute('disabled', true);
};

// Активное состояние
const getPageActiveState = () => {
  adForm.classList.remove('ad-form--disabled');
  fieldsetDisabled.forEach((fieldsetItem) => {
    fieldsetItem.removeAttribute('disabled');
  });

  mapFiltres.classList.remove('ad-form--disabled');
  mapFiltresDisabled.forEach((mapFilterItem) => {
    mapFilterItem.removeAttribute('disabled');
  });

  mapFeatures.classList.remove('ad-form--disabled');
  mapFeatures.removeAttribute('disabled');
};

getPageInactiveState();
getPageActiveState();

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
const RoomsForCapacities = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const onRoomsNumberSelect = () => {
  const variantCapacityOptions = capacitySelect.querySelectorAll('option');
  const roomsNumber =  Number(roomNumber.value);
  const quantityCapacities = RoomsForCapacities[roomsNumber];

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

buttonSendForm.addEventListener('click', onTitleInput, onPriceInput, onRoomsNumberSelect);


