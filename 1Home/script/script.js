
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

/* Dark Mode Toggle */
let darkMode = localStorage.getItem("darkMode");
var toggle = document.getElementById("dark-mode-icon");
var menuToggle = document.getElementById("dark-mode-menu-icon");
var menuIcon = document.getElementById("menu");
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const darkModeMenuToggle = document.querySelector("#dark-mode-menu-toggle");

const enableDarkMode = () => {

  document.body.classList.add("darkmode");

  localStorage.setItem("darkMode", "enabled");

  toggle.src = "NavBarFooter/img/LightModeToggle.png";

  menuToggle.src = "NavBarFooter/img/MenuLMToggle.png";

  menuIcon.src = "NavBarFooter/img/DarkModeNavMenu.png";

};

const disableDarkMode = () => {

  document.body.classList.remove("darkmode");

  localStorage.removeItem("darkMode");

  toggle.src = "NavBarFooter/img/DarkModeToggle.png";

  menuToggle.src = "NavBarFooter/img/MenuDMToggle.png";

  menuIcon.src = "NavBarFooter/img/LightModeNavMenu.png";

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

/* Cube Slideshow start */
var swiper = new Swiper(".swiper-container", {
  effect: "cube",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 40,
    shadowScale: 1,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
/* Cube Slideshow end */