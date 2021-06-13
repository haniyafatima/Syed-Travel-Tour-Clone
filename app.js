const tl = gsap.timeline({
scrollTrigger: {
  trigger: ".airlineSection",
  end: "center start"
}
});
tl.fromTo(".a1", {opacity: 0}, {opacity: 1});
tl.fromTo(".a2", {opacity: 0}, {opacity: 1});
tl.fromTo(".a3", {opacity: 0}, {opacity: 1});
tl.fromTo(".a4", {opacity: 0}, {opacity: 1});
tl.fromTo(".a5", {opacity: 0}, {opacity: 1});
tl.fromTo(".a6", {opacity: 0}, {opacity: 1});
tl.fromTo(".a7", {opacity: 0}, {opacity: 1});



const navBar = () => {
  const burger= document.querySelector(".burger");
  const navLinks= document.querySelector(".nav-links");

  const toggle= burger.addEventListener("click" , () => {
    navLinks.classList.toggle("fadeIn");
    burger.classList.toggle("move");

  });
  toggle();
}
navBar();
