let map;
let markers = [];
let currentFilter = 'all';

// Initialize map
function initMap() {
    // Create map centered on world
    map = L.map('world-map').setView([20, 0], 2);
    
    // Add tile layer (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Add markers for all countries
    addMarkers();
    
    // Hide loading
    setTimeout(() => {
        document.getElementById('map-loading').style.display = 'none';
    }, 1000);
}

// Add markers to map
function addMarkers() {
    // Clear existing markers
    markers.forEach(m => map.removeLayer(m));
    markers = [];
    
    const countries = getCountriesByRegion(currentFilter);
    
    countries.forEach(country => {
        // Create custom icon
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<i class="fas fa-map-marker-alt"></i>`,
            iconSize: [30, 30],
            iconAnchor: [15, 30]
        });
        
        // Create marker
        const marker = L.marker(country.coords, { icon: icon })
            .addTo(map)
            .bindPopup(createPopupContent(country));
        
        marker.on('click', () => {
            openCountryPage(country.id);
        });
        
        markers.push(marker);
    });
}

// Create popup content
function createPopupContent(country) {
    return `
        <div class="popup-content">
            <h3>${country.name}</h3>
            <p>${country.description.substring(0, 100)}...</p>
            <button onclick="openCountryPage('${country.id}')" class="popup-btn">
                Explore <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    `;
}

// Filter countries
function filterCountries(region) {
    currentFilter = region;
    
    // Update buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === region) {
            btn.classList.add('active');
        }
    });
    
    // Update markers
    addMarkers();
    
    // Update grid
    renderCountriesGrid();
}

// Scroll to map
function scrollToMap() {
    document.getElementById('map-section').scrollIntoView({ behavior: 'smooth' });
}