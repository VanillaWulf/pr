'use strict';

var pageHeaderNav = document.querySelector('nav');
var pageHeaderToggle = document.querySelector('.page-header__toggle');
var formElem = document.getElementById('form');
var modal = document.getElementById("modal");

var span = document.getElementsByClassName("close")[0];

pageHeaderNav.classList.remove('page-header__navigation--nojs');

var closeMenu = function () {
  pageHeaderNav.classList.add('page-header__navigation--closed');
  pageHeaderNav.classList.remove('page-header__navigation--opened');
  document.body.classList.remove('page-header__fix');
};

var openMenu = function () {
  pageHeaderNav.classList.remove('page-header__navigation--closed');
  pageHeaderNav.classList.add('page-header__navigation--opened');
  document.body.classList.add('page-header__fix');
};

var toggleClickHandler = function () {
  if (pageHeaderNav !== null && pageHeaderNav.childNodes.length > 0) {
    if (pageHeaderNav.classList.contains('page-header__navigation--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  }
};

if (pageHeaderToggle !== null) {
  pageHeaderToggle.addEventListener('click', toggleClickHandler);
}

var menuItems = pageHeaderNav.querySelectorAll('.page-header__link');

menuItems.forEach(function (item) {
  item.addEventListener('click', function () {
    closeMenu();
  });
});

formElem.onsubmit = async (e) => {
  e.preventDefault();

  let response = await fetch('/save/', {
    method: 'POST',
    body: new FormData(formElem)
  });

  if (modal && modal.style) {
    modal.style.display = "block";
  }

  ym(70522576,'reachGoal','form_send');
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
