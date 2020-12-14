// Импорт массива цветов
import colors from "./colors.js";

//  Функция для рандомизации
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Доступы к кнопкам и к body
const startRef = document.querySelector('button[data-action="start"]');
const stopRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.querySelector("body");

// Вспомогательные переменные
let isActive = false;
let intervalId = null;

// Добавление слушателей события
startRef.addEventListener("click", switchBodyColor);
stopRef.addEventListener("click", stopSwitchBodyColor);

// Функции
// Функция, которая вызывает функцию смены цвета для body с интервалом
function switchBodyColor() {
  if (isActive) {
    return;
  }
  /*Функция смены цвета body вызывается так же здесь, 
  чтобы в первый раз цвет поменялся сразу, 
  и не было впечатления, что отклик от кнопки start "тупит"*/
  changeBodyColor(colors);

  intervalId = setInterval(changeBodyColor, 1000, colors);

  isActive = true;
}

// Функция, которая очищает интервал
function stopSwitchBodyColor() {
  clearInterval(intervalId);

  isActive = false;
}

// Функция, которая меняет цвет body
function changeBodyColor(colorsArr) {
  bodyRef.style.backgroundColor =
    colorsArr[randomIntegerFromInterval(0, colorsArr.length - 1)];
}
