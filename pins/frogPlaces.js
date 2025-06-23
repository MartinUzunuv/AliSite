const places = [
  { name: "Люлин", coords: [23.24129519382049, 42.719678471910385] },
  { name: "Драгалевци", coords: [23.308192739324426, 42.630680717344205] },
  { name: "Кръстова Вада", coords: [23.31433411010147, 42.651227861029724] },
  { name: "Ноевци", coords: [22.87967912534097, 42.67595783315687] },
  { name: "Петрич", coords: [23.207042595775818, 41.396833856278874] },
  { name: "Белослав", coords: [27.703922890252585, 43.19151463257765] },
  { name: "Ахтопол", coords: [27.94534190774317, 42.09635942472369] },
  { name: "Витоша в колата", coords: [23.290206865859346, 42.62634768869205] },
];

places.forEach((place) => {
  const el = document.createElement("div");
  el.className = "custom-marker";
  el.innerHTML = "🐸";
  el.style.fontSize = "24px";

  new mapboxgl.Marker(el)
    .setLngLat(place.coords)
    .setPopup(new mapboxgl.Popup().setText(place.name))
    .addTo(map);
});
