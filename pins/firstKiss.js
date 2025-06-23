const el = document.createElement("div");
el.className = "custom-marker";
el.innerHTML = "😘"; // or you could use an <img>, SVG, etc.
el.style.fontSize = "24px";

new mapboxgl.Marker(el)
  .setLngLat([23.312608625476827, 42.64225632397188])
  .setPopup(new mapboxgl.Popup().setText("Първата целувка"))
  .addTo(map);
