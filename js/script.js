/*Popup contact*/

const buttonLost = document.querySelector(".lost");
const popupLogin = document.querySelector(".modal-login");
const closePopup = document.querySelector(".modal-close");
const form = popupLogin.querySelector(".name-form");
const username = popupLogin.querySelector(".user-field");
const email = popupLogin.querySelector(".mail-field");
const storage = localStorage.getItem("username");

buttonLost.addEventListener("click", function (evt) {
    evt.preventDefault ();
    popupLogin.classList.add("active-modal");
    username.focus();    
    if (storage) {
        username.value = storage;        
    }
});

closePopup.addEventListener("click", function (evt) {
    evt.preventDefault ();
    popupLogin.classList.remove("active-modal");
});

form.addEventListener("submit", function (evt) {
    if (!username.value || !email.value) {
        evt.preventDefault ();
        console.log("Введите имя пользователя и почту");        
    } else {
        localStorage.setItem("username", username.value);
    }
});

/*Popup map*/

const mapImage = document.querySelector(".map-image");
const mapPopup = document.querySelector(".modal-map");
const closeMap = document.querySelector(".map-close");

mapImage.addEventListener("click", function (evt) {
    evt.preventDefault ();
    mapPopup.classList.add("active-modal");
});

closeMap.addEventListener("click", function (evt) {
    evt.preventDefault ();
    mapPopup.classList.remove("active-modal");
});