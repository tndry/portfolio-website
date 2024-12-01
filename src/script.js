// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

//Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

const text = "Tandry Jordan";
let index = 0;
const typingAnimation = document.getElementById("typing-animation");

function type() {
  typingAnimation.textContent = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(type, 150); // Speed of typing (milliseconds)
  }
}

type();

//click di luar hamburger

window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != menu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});


