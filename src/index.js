import "./pages/index.css";

let obj = {
  val1: 1,
  val2: 4,
};

console.log(obj?.val1);

// Получить элементы
const popupOpenButton = document.querySelector(".menu__open-popup");
const popup = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close");

const popupToggle = function (event) {
  popup.classList.toggle("popup_opened");
  console.log("нажали на кнопку");
};

// Навесить слушатель на клик по кнопке 'О проекте'
popupOpenButton.addEventListener("click", popupToggle);

// Навесить слушатель на клик по крестику
popupCloseButton.addEventListener("click", popupToggle);

// Бонусики
const header = document.querySelector(".header");
header.addEventListener("click", function (event) {
  console.log("нажали на хедер");
  console.log(event.target);
  console.log(event.currentTarget);
});

// Применение всплытия
const closePopupByClickingOnOverlay = function (event) {
  console.log(event.target);
  console.log(event.currentTarget);

  if (event.target == event.currentTarget) {
    popupToggle();
  }
};

popup.addEventListener("click", closePopupByClickingOnOverlay);
