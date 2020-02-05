'use strict';

var buttonFeedback = document.querySelector('.button-callback');
var popupFeedback = document.querySelector('.modal-feedback');
var close = popupFeedback.querySelector('.modal-close');
var userName = popupFeedback.querySelector('[id=feedback-name]');

if (buttonFeedback) {
  buttonFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add('modal-show');
    userName.focus();
  });
}

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupFeedback.classList.remove('modal-show');
});
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupFeedback.classList.contains('modal-show')) {
      popupFeedback.classList.remove('modal-show');
    }
  }
});
