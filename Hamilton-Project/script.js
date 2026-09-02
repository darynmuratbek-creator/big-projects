window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if(window.scrollY > 50){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const navLinks = header.querySelectorAll('nav a');
  const icons = header.querySelectorAll('.icons img');
  const logo = header.querySelector('.logo');

  if(window.scrollY > 50){
    header.style.background = '#fff';

    navLinks.forEach(link => link.style.color = '#000');

    logo.style.filter = 'invert(0)';
    icons.forEach(icon => icon.style.filter = 'invert(0)');
  } else {
    header.style.background = 'transparent';


    navLinks.forEach(link => link.style.color = '#fff');

    logo.style.filter = 'invert(1)';
    icons.forEach(icon => icon.style.filter = 'invert(1)');
  }
});

const slider = document.getElementById('slider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const tabs = document.querySelectorAll('.tab');

const cards = Array.from(slider.children);

let currentIndex = 0;
const cardWidth = 340;
let visibleCards = cards;


function updateSlider() {
    slider.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
}

next.addEventListener('click', () => {
  if (currentIndex < visibleCards.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

prev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// фильтрация
tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    // active tab
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;

    currentIndex = 0;
    slider.style.transform = 'translateX(0)';

    visibleCards = [];

    cards.forEach(card => {
      if (card.dataset.category.includes(filter)) {
        card.style.display = 'block';
        visibleCards.push(card);
      } else {
        card.style.display = 'none';
      }
    });
  });
});



const overlay = document.getElementById("overlay");
const links = document.querySelectorAll("[data-menu]");
const dropdowns = document.querySelectorAll(".dropdown");

function closeAllMenus() {
  dropdowns.forEach(menu => menu.classList.remove("active"));
  overlay.classList.remove("active");
}

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const menuId = link.getAttribute("data-menu");
    const menu = document.getElementById(menuId);

    if (menu.classList.contains("active")) {
      closeAllMenus();
      return;
    }

    closeAllMenus();

    const rect = link.getBoundingClientRect();

    // бастапқы позиция
    let top = rect.bottom + 15;
    let left = rect.left;

    menu.classList.add("active");

    // dropdown width өлшемін аламыз
    const menuWidth = menu.offsetWidth;
    const screenWidth = window.innerWidth;

    // егер dropdown экраннан шығып кетсе, солға жылжытамыз
    if (left + menuWidth > screenWidth - 20) {
      left = screenWidth - menuWidth - 20;
    }

    // егер сол жақтан да асып кетсе
    if (left < 20) {
      left = 20;
    }

    menu.style.top = top + "px";
    menu.style.left = left + "px";

    overlay.classList.add("active");
  });
});

overlay.addEventListener("click", closeAllMenus);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAllMenus();
});



const emailInput = document.getElementById("emailInput");
const arrowBtn = document.getElementById("arrowBtn");
const errorText = document.getElementById("errorText");

arrowBtn.addEventListener("click", () => {
  const emailValue = emailInput.value.trim();

  // Егер бос болса
  if (emailValue === "") {
    errorText.style.display = "block";
    errorText.textContent = "Please enter your email.";
    return;
  }

  // Егер дұрыс email болмаса
  if (!emailValue.includes("@") || !emailValue.includes(".")) {
    errorText.style.display = "block";
    errorText.textContent = "Please enter a valid email.";
    return;
  }

  // Егер дұрыс болса error өшеді
  errorText.style.display = "none";

  // Email-ды сақтап қоямыз (келесі бетке өткізу үшін)
  localStorage.setItem("userEmail", emailValue);

  // Басқа бетке жібереді
  window.location.href = "signup.html";
});