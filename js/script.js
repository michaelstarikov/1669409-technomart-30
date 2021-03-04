/*Popup contact*/

const buttonLost = document.querySelector(".lost");
const popupLogin = document.querySelector(".modal-login");
const closePopup = document.querySelector(".modal-close");
const form = popupLogin.querySelector(".name-form");
const username = popupLogin.querySelector(".user-field");
const email = popupLogin.querySelector(".mail-field");



let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("username");
} catch (err) {
    isStorageSupport = false;
}


buttonLost.addEventListener("click", function (evt) {
    evt.preventDefault ();
    popupLogin.classList.add("active-modal");
      
    if (storage) {
        username.value = storage;   
        email.focus();     
    } else {
        username.focus();
    }
});

closePopup.addEventListener("click", function (evt) {
    evt.preventDefault ();
    popupLogin.classList.remove("active-modal");
    popupLogin.classList.remove("modal-error"); 
});

form.addEventListener("submit", function (evt) {
    if (!username.value || !email.value) {
        evt.preventDefault ();
        popupLogin.classList.remove("modal-error"); 
        popupLogin.offsetWidth = popupLogin.offsetWidth;   
        popupLogin.classList.add("modal-error");   
    } else {
        if (isStorageSupport) {
            localStorage.setItem("username", username.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popupLogin.classList.contains("active-modal")) {
            evt.preventDefault();
            popupLogin.classList.remove("active-modal");
            popupLogin.classList.remove("modal-error"); 
        }
        
    }
})

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

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("active-modal")) {
            evt.preventDefault();
            mapPopup.classList.remove("active-modal");            
        }        
    }
})


/*Services*/

let service = function () {
    let Button = document.querySelectorAll('.service-button'),
        Slide = document.querySelectorAll('.service-slide'),
        tabName;

        Button.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        Button.forEach(item => {
            item.classList.remove('active-service');
        });
        this.classList.add('active-service');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        Slide.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active-service') : item.classList.remove('active-service');
        })
    }

};


service();

let slider = function () {
    let Dots = document.querySelectorAll('.slider-tab'),
        SliderItem = document.querySelectorAll('.slider-item'),
        slideName;

        Dots.forEach(item => {
        item.addEventListener('click', selectDotNav)
    });

    function selectDotNav() {
        Dots.forEach(item => {
            item.classList.remove('current');
        });
        this.classList.add('current');
        slideName = this.getAttribute('data-tab-name');
        selectSlideContent(slideName);
    }

    function selectSlideContent(slideName) {
        SliderItem.forEach(item => {
            item.classList.contains(slideName) ? item.classList.add('slide-current') : item.classList.remove('slide-current');
        })
    }

};


slider();


