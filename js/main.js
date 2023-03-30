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


// project - hover
const mainProject = document.querySelectorAll('.project__img');

function onMouseEnter(event) {
  const hover = event.target.childNodes[1];
  hover.classList.remove('hidden');
}

function onMouseLeave(event) {
  const hover = event.target.childNodes[1];
  hover.classList.add('hidden');
}

mainProject.forEach((project) => {
  project.addEventListener('mouseenter', onMouseEnter);
  project.addEventListener('mouseleave', onMouseLeave);
});


// footer - 올해 년도 출력
const year = document.querySelector('footer .year');

const dateYear = new Date().getFullYear();
year.innerText = dateYear;