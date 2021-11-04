import './generate.js';
import './forms.js';
import './map.js';
import './api.js';
import {getData} from './api.js';
import {addPoints, resetMainPinMarker, closePopupMapMarkers} from './map.js';
import {setUserFormSubmit, adForm, resetButton} from './forms.js';
import {showError} from './show-error.js';
import {showSuccessPopup, showErrorPopup} from './popus.js';

const GET_URL = 'https://24.javascript.pages.academy/keksobooking/data';

const setDefaults = () => {
  adForm.reset();
  resetMainPinMarker();
  closePopupMapMarkers();
};

getData(GET_URL, addPoints, showError);


setUserFormSubmit(() => {
  showSuccessPopup();
  setDefaults();
}, showErrorPopup);

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  setDefaults();
});
