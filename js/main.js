// main page -typeit
const typeit = document.getElementById("who-am-i");

new TypeIt(typeit, {
  speed: 70,
  startDelay: 1200,
  cursor: 0
}).go();

// main page - fade in
const fadeInEls = document.querySelectorAll(".fade-in");

fadeInEls.forEach(function (element, index) {
  gsap.to(element, 1.7, {
    delay: (index + 3.5) * .7,
    opacity: 1,
  });
});


// footer - 올해 년도 출력
const year = document.querySelector('.year');

const dateYear = new Date().getFullYear();
year.innerText = dateYear;