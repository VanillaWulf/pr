'use strict';

var pageHeaderNav = document.querySelector('nav');
var pageHeaderToggle = document.querySelector('.page-header__toggle');

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
