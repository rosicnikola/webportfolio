const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => 
{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => 
{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
    method : "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
    Response => Response.json()
  ).then((html) => {
    window.open('contact-form.html', '_blank');
  });
});

var newslatter = document.getElementById('sheetdb-newslatter');
newslatter.addEventListener("submit", e => {
  e.preventDefault();
  fetch(newslatter.action, {
    method : "POST",
    body: new FormData(document.getElementById("sheetdb-newslatter")),
  }).then(
    Response => Response.json()
  ).then((html) => {
    window.open('email-form.html', '_blank');
  });
});
