import {getPageActiveState, addAddRess, addressArea, getPageInactiveState} from './forms.js';
import {createPopup} from './generate.js';

const STARTING_LATITUDE = 35.6895;
const STARTING_LONGITUDE = 139.6921;
const ZOOM = 12;
const MAIN_ICON_SIZE = 52;
const ICON_SIZE = 40;

const markers = [];

addressArea.value = `${STARTING_LATITUDE}, ${STARTING_LONGITUDE}`;

getPageInactiveState();

const map = L.map('map-canvas')
  .on('load', () => {
    getPageActiveState();

  })
  .setView({
    lat: STARTING_LATITUDE,
    lng: STARTING_LONGITUDE,
  }, ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);


// Главный маркер
const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [MAIN_ICON_SIZE, MAIN_ICON_SIZE],
  iconAnchor: [MAIN_ICON_SIZE / 2, MAIN_ICON_SIZE],
});

const mainPinMarker = L.marker(
  {
    lat: STARTING_LATITUDE,
    lng: STARTING_LONGITUDE,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  });

mainPinMarker.addTo(map);

const onPinMove = (evt) => {
  const lat = evt.target.getLatLng().lat;
  const lng = evt.target.getLatLng().lng;
  addAddRess(lat, lng);
};

mainPinMarker.on('moveend', onPinMove);

const resetMainPinMarker = () => {
  mainPinMarker.setLatLng(L.latLng(STARTING_LATITUDE, STARTING_LONGITUDE));
  addressArea.value = `${STARTING_LATITUDE}, ${STARTING_LONGITUDE}`;
};

// Второстепенные маркеры и балун
const markerGroup = L.layerGroup().addTo(map);

const addPoints = (points) => {

  const filtredPoints = points.slice();

  filtredPoints.slice(0, 10).forEach((point) => {
    const {lat, lng} = point.location;

    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [ICON_SIZE, ICON_SIZE],
      iconAnchor: [ICON_SIZE / 2, ICON_SIZE],
    });

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      });

    marker
      .addTo(markerGroup)
      .bindPopup(createPopup(point));
    markers.push(marker);
  });
};

const removeMapMarkers = () => {
  markers.forEach((marker) => {
    marker.remove();
  });
};

const closePopupMapMarkers = () => {
  markers.forEach((marker) => {
    marker.closePopup();
  });
};

export {
  addPoints,
  resetMainPinMarker,
  closePopupMapMarkers,
  removeMapMarkers
};


