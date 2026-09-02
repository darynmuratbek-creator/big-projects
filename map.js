let map;
let markers = [];

// --- INIT MAP ---
function initMap() {
  const el = document.getElementById('world-map');
  if (!el) return;

  map = L.map('world-map').setView([20, 0], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map'
  }).addTo(map);

  addMarkers();
}

// --- MARKERS ---
function addMarkers() {
  Object.values(countriesData).forEach(c => {
    if (!c.coords) return;

    const marker = L.marker(c.coords)
      .addTo(map)
      .bindPopup(`
        <b>${c.name}</b><br>
        $${c.price}/day
      `);

    marker.on('click', () => openCountry(c.id));

    markers.push(marker);
  });
}