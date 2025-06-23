mapboxgl.accessToken =
  "pk.eyJ1IjoibWFydGluMDUiLCJhIjoiY21jOHMzcDR6MWQ4aTJrc2Fud3pqcXE1ZSJ9.ys8jkzhHTa64mu_HkLqYCg";
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [23.3219, 42.6977], // Sofia
  zoom: 10
});

const pins = [
  { lng: 23.3219, lat: 42.6977, name: 'Home' },
  { lng: 23.34, lat: 42.70, name: 'Park' }
];

pins.forEach(p => {
  new mapboxgl.Marker().setLngLat([p.lng, p.lat]).setPopup(
    new mapboxgl.Popup().setText(p.name)
  ).addTo(map);
});
