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


// about me - scrollMagic
const controller = new ScrollMagic.Controller();

const introductionEls = TweenMax.from('#introduction', .8, {
  x: -200,
});

const scene = new ScrollMagic.Scene({
  triggerElement: "#about-img",
  // triggerHook: 0.8,
})
  .setTween(introductionEls)
  .addTo(controller)
  ;