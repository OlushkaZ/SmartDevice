'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');
//
// pageHeader.classList.remove('page-header--nojs');
//
// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

console.log('hi');

var buttonFeedback = document.querySelector('.button-callback');
var popupFeedback = document.querySelector('.modal-feedback');
var close = popupFeedback.querySelector('.modal-close');
var userName = popupFeedback.querySelector('[id=feedback-name]');
var userEmail = popupFeedback.querySelector('[id=feedback-email]');
var userText = popupFeedback.querySelector('[id=feedback-text]');

if (buttonFeedback) {
  buttonFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add('modal-show');
  });
}

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupFeedback.classList.remove('modal-show');
  popupFeedback.classList.remove('modal-error');
});
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupFeedback.classList.contains('modal-show')) {
      popupFeedback.classList.remove('modal-show');
      popupFeedback.classList.remove('modal-error');
    }
  }
});
popupFeedback.addEventListener('submit', function (evt) {
  if (!userName.value || !userEmail.value || !userText.value) {
    evt.preventDefault();
    popupFeedback.classList.remove('modal-error');
    popupFeedback.offsetWidth = popupFeedback.offsetWidth;
    popupFeedback.classList.add('modal-error');
    if (!userName.value) {
      userName.focus();
    } else if (!userEmail.value) {
      userEmail.focus();
    } else if (!userText.value) {
      userText.focus();
    }
  }
});
