/*Popup cart*/
const buttonsBuy = document.querySelectorAll(".button-buy");
const popupCart = document.querySelector(".modal-cart");
const popupCartClose = document.querySelector(".modal-cart-close");

for (let i = 0; i < buttonsBuy.length; i++) {
    buttonsBuy[i].addEventListener('click', function(){      
      popupCart.classList.add('active-modal');
    });
}

popupCartClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupCart.classList.remove("active-modal");    
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popupCart.classList.contains("active-modal")) {
            evt.preventDefault();
            popupCart.classList.remove("active-modal");            
        }        
    }
});

/*Popup contact*/
const buttonLost = document.querySelector(".lost");
const popupLogin = document.querySelector(".modal-login");
const closePopup = document.querySelector(".modal-close");
const form = document.querySelector(".name-form");
const username = document.querySelector(".user-field");
const email = document.querySelector(".mail-field");  

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("username");
} catch (err) {
    isStorageSupport = false;
};

buttonLost.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupLogin.classList.add("active-modal");
      
    if (storage) {
        username.value = storage;   
        email.focus();     
    } else {
        username.focus();
    }
});

closePopup.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupLogin.classList.remove("active-modal");
    popupLogin.classList.remove("modal-error"); 
});

form.addEventListener("submit", function(evt) {
    if (!username.value || !email.value) {
        evt.preventDefault();
        popupLogin.classList.remove("modal-error"); 
        popupLogin.offsetWidth = popupLogin.offsetWidth;   
        popupLogin.classList.add("modal-error");   
    } else {
        if (isStorageSupport) {
            localStorage.setItem("username", username.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popupLogin.classList.contains("active-modal")) {
            evt.preventDefault();
            popupLogin.classList.remove("active-modal");
            popupLogin.classList.remove("modal-error"); 
        }        
    }
});

/*Popup map*/
const mapImage = document.querySelector(".map-image");
const mapPopup = document.querySelector(".modal-map");
const closeMap = document.querySelector(".map-close");

mapImage.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("active-modal");
});

closeMap.addEventListener("click", function(evt) {
    evt.preventDefault ();
    mapPopup.classList.remove("active-modal");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("active-modal")) {
            evt.preventDefault();
            mapPopup.classList.remove("active-modal");            
        }        
    }
});

/*Services*/
let service = function() {
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

const promoSlides = document.querySelectorAll('.slider-item');
const buttonBack = document.querySelector('.button-back');
const buttonForward = document.querySelector('.button-forward');
const sliderTabs = document.querySelectorAll('.slider-tab');

  let slideIndex = 0;

  function switchToNextSlide(id) {
    document.querySelector('.slide-current').classList.remove('slide-current');
    document.querySelector('.current').classList.remove('current');

    slideIndex = id >= 0 ? id % promoSlides.length : promoSlides.length - 1;

    promoSlides[slideIndex].classList.add('slide-current');
    sliderTabs[slideIndex].classList.add('current');
  }

  for (let i = 0; i < sliderTabs.length; i++) {
    sliderTabs[i].addEventListener('click', function (evt) {
      switchToNextSlide(evt.target.dataset.slide);
    })
  }
  buttonForward.addEventListener('click', function () {
    switchToNextSlide(slideIndex + 1);
  });
  buttonBack.addEventListener('click', function () {
    switchToNextSlide(slideIndex - 1)
  });
