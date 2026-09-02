// State management
let currentUser = null;
let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
let currentHotel = null;
let currentRating = 0;
let currentCountry = null;

// Scroll Reveal Animation
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.step-card, .testimonial-card, .country-card, .hotel-card, .stat-box, .city-card, .feature-list li').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// Animated counter
function animateCounter(el, target) {
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + (el.dataset.suffix || '');
        if (current >= target) clearInterval(timer);
    }, 20);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    renderCountriesGrid();
    updateBookingCount();
    checkTheme();
    
    // Init scroll reveal with a slight delay
    setTimeout(initScrollReveal, 300);
    
    // Set min date for booking
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('checkin-date').min = today;
    document.getElementById('checkout-date').min = today;
});

// Navigation
function goToPage(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    
    // Show selected page
    document.getElementById(page + '-page').classList.remove('hidden');
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Re-init scroll reveal for new page
    setTimeout(initScrollReveal, 100);
    
    // Update nav
    if (page === 'bookings') {
        renderBookings();
    }
}

// Render countries grid
function renderCountriesGrid() {
    const grid = document.getElementById('countries-grid');
    const countries = getCountriesByRegion(currentFilter).slice(0, 6);
    
    grid.innerHTML = countries.map(country => `
        <div class="country-card" onclick="openCountryPage('${country.id}')">
            <img src="${country.image}" alt="${country.name}">
            <div class="country-card-content">
                <h3>${country.name}</h3>
                <p>${country.description.substring(0, 80)}...</p>
                <div class="country-meta">
                    <span class="country-price">From $${country.price}</span>
                    <span class="country-rating">★ ${country.rating}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Open country page
function openCountryPage(countryId) {
    const country = getCountryById(countryId);
    if (!country) return;
    
    currentCountry = country;
    
    // Update hero
    document.getElementById('country-hero').style.backgroundImage = `url(${country.image})`;
    document.getElementById('country-name').textContent = country.name;
    document.getElementById('country-rating').textContent = country.rating;
    document.getElementById('country-visitors').textContent = country.visitors;
    
    // Update info
    document.getElementById('country-description').textContent = country.description;
    document.getElementById('weather').textContent = country.temperature;
    document.getElementById('budget').textContent = '$' + country.price;
    document.getElementById('timezone').textContent = country.timezone;
    document.getElementById('safety').textContent = country.safety;
    
    // Render cities
    const citiesGrid = document.getElementById('cities-grid');
    citiesGrid.innerHTML = country.cities.map(city => `
        <div class="city-card">
            <img src="${city.image}" alt="${city.name}">
            <h3>${city.name}</h3>
        </div>
    `).join('');
    
    // Render hotels
    renderHotels(country.hotels);
    
    // Render reviews
    renderReviews();
    
    // Go to page
    goToPage('country');
}

// Render hotels
function renderHotels(hotels) {
    const grid = document.getElementById('hotels-grid');
    grid.innerHTML = hotels.map(hotel => `
        <div class="hotel-card">
            <div class="hotel-image">
                <img src="${hotel.image}" alt="${hotel.name}">
                <span class="hotel-badge">${hotel.rating} ★</span>
            </div>
            <div class="hotel-content">
                <h3>${hotel.name}</h3>
                <div class="hotel-location">
                    <i class="fas fa-map-marker-alt"></i> ${hotel.location}
                </div>
                <div class="hotel-footer">
                    <div class="hotel-price">
                        $${hotel.price} <span>/ night</span>
                    </div>
                    <button class="book-btn" onclick="openBookingModal('${hotel.name}', ${hotel.price})">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Sort hotels
function sortHotels(by) {
    if (!currentCountry) return;
    
    const sorted = [...currentCountry.hotels].sort((a, b) => {
        if (by === 'price') return a.price - b.price;
        if (by === 'rating') return b.rating - a.rating;
        return 0;
    });
    
    renderHotels(sorted);
}

// Booking modal
function openBookingModal(hotelName, price) {
    currentHotel = { name: hotelName, price: price };
    document.getElementById('modal-hotel-name').textContent = hotelName;
    document.getElementById('price-per-night').textContent = price;
    document.getElementById('booking-modal').classList.remove('hidden');
    calculateTotal();
}

function closeModal() {
    document.getElementById('booking-modal').classList.add('hidden');
    currentHotel = null;
}

function calculateTotal() {
    if (!currentHotel) return;
    
    const checkin = new Date(document.getElementById('checkin-date').value);
    const checkout = new Date(document.getElementById('checkout-date').value);
    const adults = parseInt(document.getElementById('adults-count').value);
    const roomType = document.getElementById('room-type').value;
    
    let nights = 0;
    if (checkin && checkout && checkout > checkin) {
        nights = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
    }
    
    let multiplier = 1;
    if (roomType === 'deluxe') multiplier = 1.5;
    if (roomType === 'suite') multiplier = 2;
    
    const total = Math.round(nights * currentHotel.price * multiplier);
    
    document.getElementById('nights-count').textContent = nights;
    document.getElementById('total-price').textContent = total;
}

function saveBooking(e) {
    e.preventDefault();
    
    if (!currentUser) {
        showToast('Please login first!', 'error');
        openAuthModal();
        return;
    }
    
    const checkin = document.getElementById('checkin-date').value;
    const checkout = document.getElementById('checkout-date').value;
    const adults = document.getElementById('adults-count').value;
    const roomType = document.getElementById('room-type').value;
    const total = document.getElementById('total-price').textContent;
    
    const booking = {
        id: Date.now(),
        hotel: currentHotel.name,
        country: currentCountry.name,
        checkin,
        checkout,
        adults,
        roomType,
        total,
        image: currentCountry.image
    };
    
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    updateBookingCount();
    closeModal();
    showToast('Booking confirmed successfully!');
    
    // Reset form
    e.target.reset();
}

// Render bookings
function renderBookings() {
    const container = document.getElementById('bookings-list');
    
    if (bookings.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-calendar-alt"></i>
                <p>No bookings yet</p>
                <button onclick="goToPage('home')" class="btn-primary">Start Exploring</button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = bookings.map(booking => `
        <div class="booking-card">
            <img src="${booking.image}" alt="${booking.country}" class="booking-image">
            <div class="booking-info">
                <h3>${booking.hotel}</h3>
                <div class="booking-dates">
                    <i class="fas fa-map-marker-alt"></i> ${booking.country}<br>
                    <i class="fas fa-calendar"></i> ${booking.checkin} to ${booking.checkout}<br>
                    <i class="fas fa-user"></i> ${booking.adults} Adults • ${booking.roomType}
                </div>
                <div class="booking-price">$${booking.total}</div>
            </div>
            <div class="booking-actions">
                <button class="cancel-btn" onclick="cancelBooking(${booking.id})">
                    <i class="fas fa-trash"></i> Cancel
                </button>
            </div>
        </div>
    `).join('');
}

function cancelBooking(id) {
    if (confirm('Are you sure you want to cancel this booking?')) {
        bookings = bookings.filter(b => b.id !== id);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        renderBookings();
        updateBookingCount();
        showToast('Booking cancelled');
    }
}

function updateBookingCount() {
    document.getElementById('booking-count').textContent = bookings.length;
}

// Reviews
function setRating(n) {
    currentRating = n;
    const stars = document.querySelectorAll('#star-input i');
    stars.forEach((star, i) => {
        if (i < n) {
            star.classList.remove('far');
            star.classList.add('fas', 'active');
        } else {
            star.classList.remove('fas', 'active');
            star.classList.add('far');
        }
    });
}

function submitReview() {
    if (!currentUser) {
        showToast('Please login to write a review!', 'error');
        openAuthModal();
        return;
    }
    
    const text = document.getElementById('review-text').value;
    if (!text || currentRating === 0) {
        showToast('Please add rating and text', 'error');
        return;
    }
    
    const review = {
        author: currentUser.name,
        rating: currentRating,
        text: text,
        date: new Date().toISOString().split('T')[0]
    };
    
    if (!currentCountry.reviews) currentCountry.reviews = [];
    currentCountry.reviews.unshift(review);
    
    document.getElementById('review-text').value = '';
    setRating(0);
    renderReviews();
    showToast('Review submitted!');
}

function renderReviews() {
    const container = document.getElementById('reviews-list');
    const reviews = currentCountry.reviews || [];
    
    if (reviews.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-light);">No reviews yet. Be the first!</p>';
        return;
    }
    
    container.innerHTML = reviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <div class="review-author">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${review.author}" alt="${review.author}">
                    <div class="review-author-info">
                        <strong>${review.author}</strong>
                        <span>${review.date}</span>
                    </div>
                </div>
                <div class="review-rating">${'★'.repeat(review.rating)}</div>
            </div>
            <p class="review-text">${review.text}</p>
        </div>
    `).join('');
}

// Auth Modal
function openAuthModal() {
    document.getElementById('auth-modal').classList.remove('hidden');
}

function closeAuthModal() {
    document.getElementById('auth-modal').classList.add('hidden');
}

function switchAuthTab(tab) {
    document.getElementById('login-tab').classList.toggle('active', tab === 'login');
    document.getElementById('register-tab').classList.toggle('active', tab === 'register');
    
    document.getElementById('login-form').classList.toggle('hidden', tab !== 'login');
    document.getElementById('register-form').classList.toggle('hidden', tab !== 'register');
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    
    // Simple mock login
    currentUser = {
        name: email.split('@')[0],
        email: email
    };
    
    updateAuthUI();
    closeAuthModal();
    showToast('Welcome back, ' + currentUser.name + '!');
    e.target.reset();
}

function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirm = document.getElementById('register-confirm').value;
    
    if (password !== confirm) {
        showToast('Passwords do not match!', 'error');
        return;
    }
    
    currentUser = {
        name: name,
        email: email
    };
    
    updateAuthUI();
    closeAuthModal();
    showToast('Account created! Welcome, ' + name + '!');
    e.target.reset();
}

function updateAuthUI() {
    const authBtn = document.querySelector('.auth-btn');
    if (currentUser) {
        authBtn.innerHTML = `<i class="fas fa-user"></i> ${currentUser.name}`;
        authBtn.onclick = logout;
    } else {
        authBtn.innerHTML = `<i class="fas fa-user"></i> Login`;
        authBtn.onclick = openAuthModal;
    }
}

function logout() {
    if (confirm('Logout?')) {
        currentUser = null;
        updateAuthUI();
        showToast('Logged out successfully');
    }
}

// Theme toggle
function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    
    const icon = document.getElementById('theme-icon');
    icon.className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function checkTheme() {
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    
    const icon = document.getElementById('theme-icon');
    icon.className = saved === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Newsletter
function subscribe() {
    const email = document.getElementById('email-input').value;
    if (email) {
        showToast('Thank you for subscribing!');
        document.getElementById('email-input').value = '';
    } else {
        showToast('Please enter your email', 'error');
    }
}

// Toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const icon = toast.querySelector('i');
    const text = document.getElementById('toast-message');
    
    text.textContent = message;
    icon.className = type === 'error' ? 'fas fa-exclamation-circle' : 'fas fa-check-circle';
    toast.style.background = type === 'error' ? '#ef4444' : '#10b981';
    
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// Close modals on outside click
window.onclick = function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
    }
}