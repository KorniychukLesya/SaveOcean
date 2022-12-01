"use strict";

function callMenu() {

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
}

callMenu();



function sliderMain() {
  const images = document.querySelectorAll(".slider__item .slider__photo img" )
  const sliderPhoto = document.querySelector(".slider__photo")
  let count = 0;
  let widthSlider;
  let numberFoto = document.getElementById("numberFoto");


  function init() {
    widthSlider = document.querySelector(".slider__item").offsetWidth;
    sliderPhoto.style.width = widthSlider * images.length + "px";

    images.forEach(img => {
      img.style.width = widthSlider + "px";
      img.style.height = "auto";
    })

    rollSlider();
  }

  window.addEventListener('resize', init);
  init();


  document.querySelector(".slider__prev").addEventListener("click", function(){
    count--;

    if (count < 0) {
      count = images.length - 1;
      console.log(count);
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
}

sliderMain()

let slider = document.getElementById("range");
let elem = document.getElementById("latestNews");

slider.oninput = function() {
  elem.style.left = - this.value * 9  + "px";
}


function doDarkTema() {
  let buttonDark = document.querySelector(".temaColor__button");
  let headerDark = document.querySelector(".header");
  let mainDark = document.querySelector(".main");
  let phoneDark = document.querySelector(".header__phone");
  let menuBtnDark = document.querySelector(".header__menu-btn");
  let articlDark = document.querySelector(".hero__article-title");
  let latestNewsDark = document.querySelector(".latestNews__item");
  let subscriptionDark = document.querySelector(".subscription");

  buttonDark.oninput = function() {
    if(this.value > 50) {
      buttonDark.classList.add("temaColor__button--dark");
      headerDark.classList.add("header--dark");
      mainDark.classList.add("main--dark");
      phoneDark.classList.add("header__phone--dark");
      menuBtnDark.classList.add("header__menu-btn--dark");
      articlDark.classList.add("hero__article-title--dark");
      latestNewsDark.classList.add("latestNews__item--dark");
      subscriptionDark.classList.add("subscription--dark");

    } else {
      buttonDark.classList.remove("temaColor__button--dark");
      headerDark.classList.remove("header--dark");
      mainDark.classList.remove("main--dark");
      phoneDark.classList.remove("header__phone--dark");
      menuBtnDark.classList.remove("header__menu-btn--dark");
      articlDark.classList.remove("hero__article-title--dark");
      latestNewsDark.classList.remove("latestNews__item--dark");
      subscriptionDark.classList.remove("subscription--dark");

    }
  }
}

doDarkTema();


const myTextbox = document.getElementById("subscription__form");
myTextbox.addEventListener("keypress", checkName, false);

function checkName(evt) {
  const charCode = evt.charCode;

  if (charCode !== 0) {
    if (charCode < 97 || charCode > 122) {
      evt.preventDefault();
    }
  }
}
