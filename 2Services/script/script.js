
/* Loader script start */
$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");

  $("body").removeClass("loading");
});
/* Loader script end */

/* Nav Bar script start */
const body = document.body;
let lastScroll = 0

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  if (currentScroll <= 0 && body.classList.contains("scroll-up")) {
    body.classlist.remove("scroll-up")
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
  }

  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down")
    body.classList.add("scroll-up")
  }

  if (currentScroll > lastScroll && nav.classList.contains("open-nav")) {
    nav.classList.remove("open-nav")
  }

  lastScroll = currentScroll
})

const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav')
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})

function popupToggle(){
  const popup = document.getElementById('popup')
  popup.classList.toggle('active')
}
/* Nav bar script end */

/* Card Catalog script start */
var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 85,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 85,
    },

  }
});
/* Card Catalog script end */

/* Dark Mode Toggle */
let darkMode = localStorage.getItem("darkMode");
var icon = document.getElementById("dark-mode-icon")
var menuIcon = document.getElementById("dark-mode-menu-icon")
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const darkModeMenuToggle = document.querySelector("#dark-mode-menu-toggle")

const enableDarkMode = () => {

  document.body.classList.add("darkmode");

  localStorage.setItem("darkMode", "enabled");

  icon.src = "NavBarFooter/img/LightModeToggle.png";

  menuIcon.src = "NavBarFooter/img/MenuLMToggle.png";

};

const disableDarkMode = () => {

  document.body.classList.remove("darkmode");

  localStorage.removeItem("darkMode");

  icon.src = "NavBarFooter/img/DarkModeToggle.png";

  menuIcon.src = "NavBarFooter/img/MenuDMToggle.png";
}

if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !=="enabled") {
    enableDarkMode();
  }

  else {
    disableDarkMode();
  }

});

darkModeMenuToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode !=="enabled") {
    enableDarkMode();
  }

  else {
    disableDarkMode();
  }

});
/* Dark Mode Toggle end */