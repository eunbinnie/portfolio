// main first page
// typeit
const typeit = document.getElementById("who-am-i");

new TypeIt(typeit, {
  speed: 70,
  startDelay: 1200,
  cursor: 0
}).go();

// fade in
const fadeInEls = document.querySelectorAll(".fade-in");

fadeInEls.forEach(function (element, index) {
  gsap.to(element, 1.7, {
    delay: (index + 3.5) * .7,
    opacity: 1,
  });
});

// side menu 출력
const menuIcon = document.getElementById("menu__icon");
const sideMenu = document.getElementById("side__menu");
const closeBtn = document.querySelector("#side__menu span");

menuIcon.addEventListener('click', function () {
  menuIcon.classList.add('hidden');
  sideMenu.classList.remove('hidden');
});

closeBtn.addEventListener('click', function () {
  sideMenu.classList.add('hidden');
  menuIcon.classList.remove('hidden');
});


// footer - 올해 년도 출력
// const year = document.querySelector('.year');

// const dateYear = new Date().getFullYear();
// year.innerText = dateYear;