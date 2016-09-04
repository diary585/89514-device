var link = document.querySelector(".information__button");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".feedback__close");
var closemap = document.querySelector(".mappopup__close");
var overlay = document.querySelector(".overlay");
var map = document.querySelector(".information__map");
var mappopup = document.querySelector(".mappopup");
var form = popup.querySelector("form");
var firstname = popup.querySelector("[name=firstname]");
var email = popup.querySelector("[name=email]");
var textarea = popup.querySelector("[name=feedback-textarea]");
var storage = localStorage.getItem("firstname");



map.addEventListener("click", function(event) {
  event.preventDefault();
  mappopup.classList.add("mappopup--show");
  overlay.classList.add("overlay--show");
});

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback--show");
  overlay.classList.add("overlay--show");
  if (storage) {
    firstname.value = storage;
    email.focus();
  } else {
    firstname.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback--show");
  overlay.classList.remove("overlay--show");
  popup.classList.remove("feedback--error");
});

closemap.addEventListener("click", function(event) {
  event.preventDefault();
  mappopup.classList.remove("mappopup--show");
  overlay.classList.remove("overlay--show");
});

overlay.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback--show");
  overlay.classList.remove("overlay--show");
  mappopup.classList.remove("mappopup--show");
});


form.addEventListener("submit", function(event) {
  if (!firstname.value || !email.value || !textarea.value ) {
    event.preventDefault();
    popup.classList.remove("feedback--error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback--error");
    } else {
      localStorage.setItem("firstname", firstname.value);
    }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback--show")) {
      popup.classList.remove("feedback--show");
      overlay.classList.remove("overlay--show");
      popup.classList.remove("feedback--error");
    }
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mappopup.classList.contains("mappopup--show")) {
      mappopup.classList.remove("mappopup--show");
      overlay.classList.remove("overlay--show");
    }
  }
});
