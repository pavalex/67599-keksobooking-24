import './generate.js';
import './forms.js';
import './map.js';
import './api.js';
import {getData} from './api.js';
import {addPoints, resetMainPinMarker, closePopupMapMarkers, removeMapMarkers} from './map.js';
import {setUserFormSubmit, adForm, resetButton, onTypeOfHousingChange, onRoomsNumberSelect /* getPageInactiveState */} from './forms.js';
import {showError} from './utils/show-error.js';
import {showSuccessPopup, showErrorPopup} from './popus.js';
import {mapFiltres, checkType, checkPrice, checkRooms, checkGuests, checkFeatures, activateFilter, deactivateFilter} from './filter.js';
import {debounce} from './utils/debounce.js';

const GET_URL = 'https://24.javascript.pages.academy/keksobooking/data';
const RERENDER_DELAY = 500;

const setDefaults = () => {
  mapFiltres.reset();
  adForm.reset();
  resetMainPinMarker();
  closePopupMapMarkers();
  onTypeOfHousingChange();
  onRoomsNumberSelect();
};

deactivateFilter();

const getFilteredPoints = (points) => {
  activateFilter();
  const selectHousingType = document.querySelector('#housing-type');
  const selectHousingPrice = document.querySelector('#housing-price');
  const selectHousingRooms = document.querySelector('#housing-rooms');
  const selectHousingGuests = document.querySelector('#housing-guests');

  addPoints(points);

  const addFiltres = () => {
    const filteredPoints = points.filter((point) =>
      checkType(point, selectHousingType.value) &&
      checkPrice(point, selectHousingPrice.value) &&
      checkRooms(point, selectHousingRooms.value) &&
      checkGuests(point, selectHousingGuests.value) &&
      checkFeatures(point));
    removeMapMarkers();
    addPoints(filteredPoints);
  };

  mapFiltres.addEventListener('change', debounce(addFiltres, RERENDER_DELAY));
};

getData(GET_URL, getFilteredPoints, showError);


setUserFormSubmit(() => {
  showSuccessPopup();
  setDefaults();
}, showErrorPopup);

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  setDefaults();
});
