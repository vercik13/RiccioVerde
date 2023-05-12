/* Nav Mobile Responsive */

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


/* Blog Scroll Button */ 
/*
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
*/

/* EmailJS */

function SendMail() {
  const params = {
    from_name : document.getElementById("name").value,
    email: document.getElementById("email").value,
    telephone: document.getElementById("telephone").value,
    message : document.getElementById("message").value,
  }
  emailjs.send("service_9d022em", "template_u1qsswa", params)
  .then((res) => {

    from_name : document.getElementById("name").value = "";
    email: document.getElementById("email").value = "";
    telephone: document.getElementById("telephone").value = "";
    message : document.getElementById("message").value = "";

    alert("Il messaggio è stato inviato con successo :-) ");
  })
}






