const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});


const scrollBtn = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
  scrollBtn.style.display = "block"
 } else {
  scrollBtn.style.display = "none"
 }}
);

scrollBtn.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
})


