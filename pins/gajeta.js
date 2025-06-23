const el2 = document.createElement("div");
el2.className = "custom-marker";
el2.innerHTML = "💞"; // or you could use an <img>, SVG, etc.
el2.style.fontSize = "24px";

new mapboxgl.Marker(el2)
  .setLngLat([23.318109194804435, 42.66024261206442])
  .setPopup(new mapboxgl.Popup().setText("Гаджета"))
  .addTo(map);
