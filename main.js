let currentUser = null;
let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
let currentCountry = null;

const placeholder = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600';

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  renderCountries();
  initMap();
  checkTheme();
  updateBookingCount();
});

// --- SCROLL NAV ---
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// --- THEME ---
function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

function checkTheme() {
  document.documentElement.setAttribute(
    'data-theme',
    localStorage.getItem('theme') || 'light'
  );
}

// --- COUNTRIES ---
function getAllCountries() {
  return Object.values(countriesData);
}

function renderCountries() {
  const grid = document.getElementById('countries-grid');
  if (!grid) return;

  grid.innerHTML = getAllCountries().slice(0, 6).map(c => `
    <div class="card" onclick="openCountry('${c.id}')">
      <img src="${c.image || placeholder}">
      <h3>${c.name}</h3>
      <p>$${c.price}</p>
    </div>
  `).join('');
}

// --- OPEN COUNTRY ---
function openCountry(id) {
  const c = countriesData[id];
  if (!c) return;

  currentCountry = c;

  document.getElementById('country-name').textContent = c.name;
  document.getElementById('country-description').textContent = c.description;
}

// --- BOOKINGS ---
function updateBookingCount() {
  const el = document.getElementById('booking-count');
  if (el) el.textContent = bookings.length;
}