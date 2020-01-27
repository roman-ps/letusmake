'use strict';

const FORM = document.querySelector(".form");
const MESSAGE = document.querySelector(".form__message");
const MAIL = document.querySelector(".form__mail");

let infoSubmit = [];
let infoToJSON = [];

function addReview() {
  let last = {message: MESSAGE.value, mail: MAIL.value};
  infoSubmit.push(last);
  toLocalStorage(infoSubmit);
}

FORM.addEventListener("submit", addReview);