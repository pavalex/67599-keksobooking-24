const DEFAULT_VALUE = 'any';
const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;

const mapFiltres = document.querySelector('.map__filters');
const filterItems = mapFiltres.querySelectorAll('select, input, fieldset');
const housingFeatures = mapFiltres.querySelector('#housing-features');
const mapFiltresDisabled = mapFiltres.querySelectorAll('.map__filter');

const activateFilter = () => {
  mapFiltres.classList.remove('map__filters--disabled');
  mapFiltresDisabled.forEach((mapFilterItem) => {
    mapFilterItem.removeAttribute('disabled');
  });
  filterItems.forEach((el) => {
    el.disabled = false;
  });
};

const deactivateFilter = () => {
  mapFiltres.classList.add('map__filters--disabled');
  mapFiltresDisabled.forEach((mapFilterItem) => {
    mapFilterItem.setAttribute('disabled', true);
  });
  filterItems.forEach((el) => {
    el.disabled = true;
  });
};

const checkType = (point, element) => element === DEFAULT_VALUE || point.offer.type === element;

const checkPrice = (point, element) => {
  switch (element) {
    case DEFAULT_VALUE:
      return true;
    case 'low':
      return point.offer.price < LOW_PRICE;
    case 'middle':
      return point.offer.price >= LOW_PRICE && point.offer.price < HIGH_PRICE;
    case 'high':
      return point.offer.price >= HIGH_PRICE;
    default:
      return false;
  }
};

const checkRooms = (point, element) => element === DEFAULT_VALUE || Number(element) === point.offer.rooms;

const checkGuests = (point, element) => element === DEFAULT_VALUE || Number(element) === point.offer.guests;

const checkFeatures = (point) => {
  const checkedFeatures = housingFeatures.querySelectorAll('.map__checkbox:checked');
  const filteredFeatures = [];

  if (point.offer.features) {
    checkedFeatures.forEach((feature) => {
      filteredFeatures.push(feature.value);
    });

    return filteredFeatures.every((feature) => point.offer.features.includes(feature));
  }
};

export {
  activateFilter,
  deactivateFilter,
  mapFiltres,
  checkType,
  checkPrice,
  checkRooms,
  checkGuests,
  checkFeatures
};
