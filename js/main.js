const typeit = document.getElementById("who-am-i");

new TypeIt(typeit, {
  speed: 70,
  startDelay: 1200,
  cursor: 0
}).go();

const fadeInEls = document.querySelectorAll(".fade-in");

fadeInEls.forEach(function (element, index) {
  gsap.to(element, 1.7, {
    delay: (index + 3.5) * .7,
    opacity: 1,
  });
});

