const adForm = document.querySelector('.ad-form');
const fieldsetDisabled = adForm.querySelectorAll('fieldset');
const mapFiltres = document.querySelector('.map__filters');
const mapFiltresDisabled = mapFiltres.querySelectorAll('.map__filter');
const mapFeatures = mapFiltres.querySelector('.map__features');

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
