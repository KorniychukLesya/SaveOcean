'use strict';

let menuBtn = document.querySelector('.header__menu-btn');
let menuLinkAboutUs = document.querySelector('.menu__link--aboutUs');
let menuLinkOurProjects = document.querySelector('.menu__link--ourProjects');
let menuLinkStories = document.querySelector('.menu__link--stories');
let menuLinkJoinTeam = document.querySelector('.menu__link--joinTeam');
let menuLinkContactUs = document.querySelector('.menu__link--contactUs');
let menuLinkSocial = document.querySelector('.menu__social');

let menu = document.querySelector('.menu');
let main = document.querySelector('.main');
let header__logo = document.querySelector('.header__logo');
let header__menu = document.querySelector('.header__menu');
let footer = document.querySelector('.footer');

const classToggle = function() {
	menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
  main.classList.toggle('blur');
  header__logo.classList.toggle('blur');
  header__menu.classList.toggle('blur');
  footer.classList.toggle('blur');
  document.body.classList.toggle('page--with-menu');
}

menuLinkAboutUs.addEventListener('click', classToggle);
menuLinkOurProjects.addEventListener('click', classToggle);
menuLinkOurProjects.addEventListener('click', classToggle);
menuLinkStories.addEventListener('click', classToggle);
menuLinkJoinTeam.addEventListener('click', classToggle);
menuLinkContactUs.addEventListener('click', classToggle);
menuLinkSocial.addEventListener('click', classToggle);
menuBtn.addEventListener('click', classToggle);



let slider = document.getElementById("range");
let elem = document.getElementById("latestNews");

slider.oninput = function() {
    elem.style.left = - this.value * 9  + "px";
}



const myTextbox = document.getElementById('subscription__form');
myTextbox.addEventListener('keypress', checkName, false);

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



document.getElementById('subscription__form').reset();
