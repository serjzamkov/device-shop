var buttonWriteUs = document.querySelector(".btn-info-2");
var popupWriteUs = document.querySelector(".write-us-base");
var popupClose = popupWriteUs.querySelector(".modal-close");
var form = popupWriteUs.querySelector("form");
var login = popupWriteUs.querySelector("[name=name]");
var email = popupWriteUs.querySelector("[name=email]");
var storage = localStorage.getItem("login");
var iframeMap = document.querySelector(".map-bottom");
var popupMap = document.querySelector(".modal-map");
var popupCloseMap = popupMap.querySelector(".modal-close");

buttonWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus(); 
  }
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    console.log("Login and password are required");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupWriteUs.classList.contains("modal-show")) {
      popupWriteUs.classList.remove("modal-show");
    }
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
    }
  }
});

iframeMap.addEventListener("click", function (evt) {
  console.log(popupMap);
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

popupCloseMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});
