"use strict";
let menuBtn = document.querySelector(".header__menu-btn");
let menuLinkAboutUs = document.querySelector(".menu__link--aboutUs");
let menuLinkOurProjects = document.querySelector(".menu__link--ourProjects");
let menuLinkStories = document.querySelector(".menu__link--stories");
let menuLinkJoinTeam = document.querySelector(".menu__link--joinTeam");
let menuLinkContactUs = document.querySelector(".menu__link--contactUs");
let menuLinkSocial = document.querySelector(".menu__social");

let menu = document.querySelector(".menu");
let main = document.querySelector(".main");
let header__logo = document.querySelector(".header__logo");
let header__menu = document.querySelector(".header__menu");
let footer = document.querySelector(".footer");

const classToggle = function() {
	menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  main.classList.toggle("blur");
  header__logo.classList.toggle("blur");
  header__menu.classList.toggle("blur");
  footer.classList.toggle("blur");
  document.body.classList.toggle("page--with-menu");
}

menuLinkAboutUs.addEventListener("click", classToggle);
menuLinkOurProjects.addEventListener("click", classToggle);
menuLinkOurProjects.addEventListener("click", classToggle);
menuLinkStories.addEventListener("click", classToggle);
menuLinkJoinTeam.addEventListener("click", classToggle);
menuLinkContactUs.addEventListener("click", classToggle);
menuLinkSocial.addEventListener("click", classToggle);
menuBtn.addEventListener("click", classToggle);


let slider = document.getElementById("range");
let elem = document.getElementById("latestNews");

slider.oninput = function() {
  console.logthis.value * 9  + "px";
}


let buttonDark = document.querySelector(".temaColor__button");
let headerDark = document.querySelector(".header");
let mainDark = document.querySelector(".main");

buttonDark.oninput = function() {
  if(this.value > 50) {
    buttonDark.classList.add("temaColor__button--dark");
    headerDark.classList.add("header--dark");
    mainDark.classList.add("main--dark");

  } else {
    buttonDark.classList.remove("temaColor__button--dark");
    headerDark.classList.remove("header--dark");
    mainDark.classList.remove("main--dark");
  }
}

const images = document.querySelectorAll(".slider__photo img")
const sliderPhoto = document.querySelector(".slider__photo")
let count = 0;
let widthSlider;

let numberFoto = document.getElementById("numberFoto");


function init() {
  widthSlider = document.querySelector(".slider__photo").clientWidth;
  sliderPhoto.style.width = widthSlider * images.length + "px";

  images.forEach(img => {
    img.style.width = widthSlider + "px";
    img.style.height = "auto";
  })

  rollSlider();
}
init();


document.querySelector(".slider__prev").addEventListener("click", function(){
  count--;

  if (count < 0) {
    count = images.length - 1;
  }
  rollSlider();

})

document.querySelector(".slider__next").addEventListener("click", function(){
  count++;

  if (count >= images.length) {
    count = 0;
  }

  rollSlider();
})

function rollSlider() {
  sliderPhoto.style.transform = "translateX(-" + count * widthSlider + "px)";
  numberFoto.innerHTML = count + 1;
}


const myTextbox = document.getElementById("subscription__form");
myTextbox.addEventListener("keypress", checkName, false);

function checkName(evt) {
  const charCode = evt.charCode;

  if (charCode !== 0) {
    if (charCode < 97 || charCode > 122) {
      evt.preventDefault();

      displayWarning(
        'Please use lowercase letters only.\n' + `charCode: ${charCode}\n`
      );
    }
  }
}

// document.getElementById("subscription__form").reset();
