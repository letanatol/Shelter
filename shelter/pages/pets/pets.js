document.addEventListener("DOMContentLoaded", function () {

  document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector(".nav__list").classList.toggle("nav__open");
    document.querySelector("body").classList.toggle("scroll");
    document.querySelector(".blackout").classList.toggle("blackout__open");
  })
  document.querySelector(".nav__list").addEventListener("click", function () {
    if (document.querySelector(".nav__list").classList.contains("nav__open")) {
      document.querySelector(".nav__list").classList.remove("nav__open");
      document.querySelector("body").classList.remove('scroll');
      document.querySelector(".blackout").classList.remove("blackout__open");
    }
  })
  document.querySelector(".blackout").addEventListener("click", function () {
    if (document.querySelector(".nav__list").classList.contains("nav__open")) {
      document.querySelector(".nav__list").classList.remove("nav__open");
      document.querySelector("body").classList.remove('scroll');
      document.querySelector(".blackout").classList.remove("blackout__open");
    }
  })
})