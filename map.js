mapboxgl.accessToken =
  "pk.eyJ1IjoibWFydGluMDUiLCJhIjoiY21jOHMzcDR6MWQ4aTJrc2Fud3pqcXE1ZSJ9.ys8jkzhHTa64mu_HkLqYCg";
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',
  center: [23.3219, 42.6977], // Sofia
  zoom: 10
});

map.on("click", (e) => {
  const { lng, lat } = e.lngLat;
  console.log(`${lng}, ${lat}`);
});

